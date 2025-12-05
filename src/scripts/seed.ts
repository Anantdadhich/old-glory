import { Document } from "@langchain/core/documents";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
//@ts-ignore
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import * as dotenv from "dotenv";


dotenv.config({ path: '.env.local' });

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const PINECONE_API_KEY = getEnv("PINECONE_API_KEY");
const PINECONE_INDEX_NAME = getEnv("PINECONE_INDEX_NAME");

const documentData = [

  {
    name: "services_offered.txt",
    content: `Q: What services does your dental clinic offer?  
Category: Services  
A: We offer a full range of dental services including general dentistry, cosmetic treatments (such as teeth whitening and veneers), orthodontics (braces and Invisalign), dental implants, root canal treatments, wisdom tooth removal, dentures, and preventative care.`
  },
  {
    name: "clinic_hours.txt",
    content: `Q: What are your clinic hours?  
Category: Clinic Info  
A: Our clinic is open Monday to Saturday from 10:30 AM to 2 PM and 6 pm - 8pm . We are closed on Sundays and public holidays.`
  },
  {
    name: "clinic_location.txt",
    content: `Q: Where is your clinic located?  
Category: Clinic Info  
A: We are located at 124/505, Vikramaditya Marg 80 ft road, Main Gate, opposite Dwarika Das Residency, Sector 12, Mansarovar, Jaipur, Rajasthan 302020`
  },
  {
    name: "appointment_policy.txt",
    content: `Q: Do I need an appointment, or can I walk in?  
Category: Booking  
A: We recommend booking an appointment to avoid wait times, but we do accept walk-ins depending on availability.`
  },
  {
    name: "how_to_book.txt",
    content: `Q: How can I book an appointment?  
Category: Booking  
A: You can book an appointment by calling us at +91 88757 00500, visiting our website at www.oldglory.in, or sending a WhatsApp message to +91 88757 00500.`
  },
  {
    name: "child_friendly.txt",
    content: `Q: Is your clinic child-friendly?  
Category: Services  
A: Yes, we provide pediatric dental care and our clinic is equipped to make children feel comfortable and at ease.`
  },

 
  {
    name: "aftercare_extraction.txt",
    content: `Q: What should I do after a tooth extraction?  
Category: Aftercare  
A: After extraction, bite gently on gauze for 30–60 minutes, avoid spitting or using straws for 24 hours, and eat soft foods. We'll provide full aftercare instructions post-procedure.`
  },
  {
    name: "followup_visit.txt",
    content: `Q: Will I need a follow-up visit?  
Category: Aftercare  
A: For procedures like root canals, implants, or extractions, we typically schedule a follow-up within 7–14 days to monitor healing.`
  },
  {
    name: "eating_after_treatment.txt",
    content: `Q: Can I eat after a cleaning or filling?  
Category: Aftercare  
A: Yes. After a cleaning, you can eat right away. After a filling, wait 1–2 hours, especially if anesthesia was used.`
  },
  {
    name: "pain_after_procedure.txt",
    content: `Q: What if I experience pain after a procedure?  
Category: Aftercare  
A: Mild discomfort is common, but if you experience severe pain, swelling, or fever, contact us immediately for follow-up care.`
  },


  {
    name: "missed_appointment.txt",
    content: `Q: What if I miss my appointment?  
Category: Booking  
A: If you miss your appointment, please call or message us as soon as possible. We'll be happy to reschedule at your convenience.`
  },
  {
    name: "emergency_care.txt",
    content: `Q: Do you offer emergency dental care?  
Category: Emergency  
A: Yes, we provide same-day emergency care for dental pain, swelling, broken teeth, or trauma. Call us immediately if you're experiencing a dental emergency.`
  },
  {
    name: "contact_info.txt",
    content: `Q: How can I contact you?  
Category: Contact  
A: You can call us at +91 88757 00500, WhatsApp us at +91 88757 00500, or email us at drtanmaysharma@gmail.com. Our team is responsive and ready to assist you.`
  },

  
  {
    name: "service_cost.txt",
    content: `Q: How much do your services cost?  
Category: Pricing  
A: Prices vary by treatment.Please contact the clinic staff.`
  },
  {
    name: "insurance_accepted.txt",
    content: `Q: Do you accept insurance?  
Category: Insurance  
A: Yes, we accept most major dental insurance plans. Please bring your insurance card or details during your visit.`
  },
  {
    name: "installments.txt",
    content: `Q: Can I pay in installments?  
Category: Payments  
A: Yes, for certain treatments like implants, braces, and smile makeovers, we offer flexible EMI and installment options.`
  },
  {
    name: "quotes_before_treatment.txt",
    content: `Q: Do you provide quotes before treatment?  
Category: Pricing  
A: Yes, after an initial consultation and diagnosis, we provide a detailed treatment plan with cost estimates.`
  },


  {
    name: "team_info.txt",
    content: `Q: Who are your dentists?  
Category: Team  
A: Our team includes Dr.Ridam Jain, a MDS orthodontist , Cosmetic dentist , with 15+ years of experience, Dr. Tanmay Sharma, an MDS orthodontist and implantologist with 20+ years experience. All are highly qualified and dedicated to patient care.`
  },
  {
    name: "nervous_patients.txt",
    content: `Q: Do your dentists have experience with nervous patients?  
Category: Team  
A: Yes, our dentists are trained in patient comfort techniques and can offer sedation options for anxious patients.`
  },
  {
    name: "equipment.txt",
    content: `Q: What equipment do you use?  
Category: Clinic Info  
A: We use modern dental technology including digital X-rays, intraoral scanners, and pain-free anesthesia systems to ensure accurate and comfortable treatments.`
  },
  {
    name: "hygiene.txt",
    content: `Q: Is your clinic hygienic and sterilized?  
Category: Hygiene  
A: Absolutely. We follow strict infection control protocols, including sterilization of instruments, disposable materials, and regular clinic sanitation.`
  },


  {
    name: "teeth_cleaning.txt",
    content: `Q: What is the process for teeth cleaning?  
Category: Treatments  
A: A professional cleaning involves removing plaque and tartar buildup using ultrasonic scalers and polishing tools. It's painless and usually takes 30–45 minutes.`
  },
  {
    name: "root_canal.txt",
    content: `Q: Is root canal treatment painful?  
Category: Treatments  
A: No, with modern techniques and local anesthesia, root canal treatments are virtually painless. Some soreness may follow, but it's manageable with medication.`
  },
  {
    name: "invisalign.txt",
    content: `Q: Do you offer Invisalign or clear aligners?  
Category: Orthodontics  
A: Yes, we offer Invisalign and other clear aligner systems as a discreet and effective way to straighten teeth.`
  },
  {
    name: "teeth_whitening.txt",
    content: `Q: How long does teeth whitening last?  
Category: Cosmetic  
A: In-office whitening results can last 6 months to 2 years depending on your diet and oral habits. Avoiding staining foods and smoking helps extend results.`
  },
  {
    name: "wisdom_tooth_extraction.txt",
    content: `Q: Do you do wisdom tooth extractions?  
Category: Oral Surgery  
A: Yes, we perform both simple and surgical wisdom tooth extractions depending on the complexity of the case.`
  },
  {
    name: "dental_implants.txt",
    content: `Q: What are dental implants, and are they right for me?  
Category: Implants  
A: Dental implants are titanium posts surgically placed into the jaw to support crowns. They're ideal for patients with good bone density and healthy gums.`
  },
  {
    name: "checkup_frequency.txt",
    content: `Q: How often should I get a dental check-up?  
Category: Preventative Care  
A: We recommend a check-up and cleaning every 6 months to maintain oral health and catch issues early.`
  }
];





async function main() {
  console.log("Starting seeding process...");

  try {
    const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY });

 
    console.log(`Checking if index "${PINECONE_INDEX_NAME}" exists...`);
    const indexList = await pinecone.listIndexes();
    const indexExists = indexList.indexes?.some(index => index.name === PINECONE_INDEX_NAME);

    if (!indexExists) {
      console.log(`Creating index "${PINECONE_INDEX_NAME}"...`);
      await pinecone.createIndex({
        name: PINECONE_INDEX_NAME,
        dimension: 384, 
        metric: "cosine",
        spec: { serverless: { cloud: 'aws', region: 'us-east-1' } }
      });
      console.log(`Index created. Waiting for it to be ready...`);
      await new Promise(resolve => setTimeout(resolve, 60000)); 
    } else {
      console.log(`Index "${PINECONE_INDEX_NAME}" already exists.`);
    }

    const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);
    const embeddings = new HuggingFaceTransformersEmbeddings({ modelName: "Xenova/all-MiniLM-L6-v2" });

    const documents = documentData.map(doc => new Document({
      pageContent: doc.content,
      metadata: { source: doc.name },
    }));

    console.log("Uploading documents to Pinecone...");
    await PineconeStore.fromDocuments(documents, embeddings, {
      pineconeIndex,
      namespace: "dental-info",
    });

    console.log("✅ Seeding complete!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  }
}

main();