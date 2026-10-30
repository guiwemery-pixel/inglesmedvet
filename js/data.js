/* Conteúdo da plataforma Inglês Veterinário.
 * W(inglês, português, pronúncia aproximada, definição simples em inglês, frase de exemplo)
 * A frase de exemplo sempre contém o termo em inglês: ela é usada nos exercícios
 * de completar lacunas e de montar frases.
 */
function W(en, pt, pr, def, ex) { return { en, pt, pr, def, ex }; }

const SECTIONS = [
  { id: "s1", title: "Fundamentos", level: "A1–A2", desc: "Clínica veterinária, espécies, anatomia externa, esqueleto e manejo dos animais." },
  { id: "s2", title: "Na prática clínica", level: "B1", desc: "Sinais clínicos, anamnese com o tutor, exame físico, terminologia e imagem." },
  { id: "s3", title: "Sistemas e prevenção", level: "B1–B2", desc: "Cardiovascular, respiratório, digestivo, urinário, pele e medicina preventiva." },
  { id: "s4", title: "Plantão", level: "B2", desc: "Medicamentos, cirurgia, emergência, exames, abreviações e falsos cognatos." }
];

const UNITS = [
  /* ---------------- SEÇÃO 1 ---------------- */
  {
    id: "clinic", section: "s1", icon: "🏥", title: "Clínica e equipe", en: "The veterinary clinic and the team",
    words: [
      W("Veterinarian", "Médico(a)-veterinário(a)", "Vé-te-ri-né-ri-ãn", "A doctor who treats animals. Also called vet or veterinary surgeon (UK).", "The veterinarian examined the dog carefully."),
      W("Veterinary technician", "Técnico(a) / enfermeiro(a) veterinário(a)", "Vé-te-ri-né-ri Tek-ní-shãn", "A trained person who helps the vet with nursing, lab work and anesthesia. Called veterinary nurse in the UK.", "The veterinary technician took a blood sample from the cat."),
      W("Receptionist", "Recepcionista", "Ri-sép-shã-nist", "The person who welcomes clients and books appointments.", "The receptionist checked the cat in for surgery."),
      W("Owner", "Tutor(a) / dono(a)", "Ôu-nãr", "The person responsible for an animal. Many clinics also say client or pet parent.", "The owner says the dog is not eating."),
      W("Pet", "Animal de estimação / pet", "Pét", "An animal kept at home for company.", "Dogs and cats are the most common pet species."),
      W("Animal hospital", "Hospital veterinário", "É-ni-mãl Rós-pi-ral", "A large veterinary facility with surgery, imaging and hospitalization.", "The animal hospital is open 24 hours a day."),
      W("Waiting room", "Sala de espera", "Uêi-rin Rúm", "The area where clients and animals wait to be seen.", "Keep cats and dogs apart in the waiting room."),
      W("Exam room", "Consultório", "Ig-zém Rúm", "The room where the vet examines the animal.", "Please bring Max to exam room two."),
      W("Kennel", "Canil / baia de internação", "Ké-nãl", "A cage or small enclosure where a dog stays; also a place that boards dogs.", "The dog will stay in a kennel after the surgery."),
      W("Cattery", "Gatil", "Ké-te-ri", "A place where cats are kept or boarded.", "The cat stayed in the cattery while the owners traveled."),
      W("Ward", "Internação / enfermaria", "Uórd", "The area of the hospital where sick animals stay to be treated.", "The puppy with parvovirus is in the isolation ward."),
      W("Appointment", "Consulta (horário marcado)", "A-póint-ment", "A planned time to see the vet.", "I would like to book an appointment for my cat's vaccine."),
      W("Check-up", "Consulta de rotina / check-up", "Tchék-áp", "A routine visit to check that an animal is healthy.", "Senior dogs need a check-up every six months."),
      W("Discharge", "Alta", "Dís-tchardj", "When an animal goes home after treatment in the hospital.", "Bella is ready for discharge this afternoon."),
      W("Medical record", "Prontuário", "Mé-di-kãl Ré-kãrd", "The document with an animal's history, exams and treatments.", "Write the vaccine in the medical record."),
      W("Practice", "Clínica / consultório (o negócio)", "Prék-tis", "The business where a vet works, e.g. a small animal practice.", "She works in a small animal practice in the city.")
    ],
    reading: {
      title: "A busy morning at the clinic",
      text: "Dr. Costa is a veterinarian in a small animal practice. At eight o'clock, the receptionist checks in the first patients. The waiting room is already full: a puppy for its first vaccine, an old cat for a check-up and a dog that is limping. The veterinary technician weighs each animal and writes the weight in the medical record. Then Dr. Costa examines them in the exam room and talks to each owner. Before lunch, she visits the ward to check the hospitalized animals and plans the discharge of a dog that had surgery yesterday.",
      pt: "A Dra. Costa é médica-veterinária em uma clínica de pequenos animais. Às oito horas, a recepcionista faz o check-in dos primeiros pacientes. A sala de espera já está cheia: um filhote para a primeira vacina, um gato idoso para um check-up e um cão que está mancando. O técnico veterinário pesa cada animal e anota o peso no prontuário. Depois a Dra. Costa os examina no consultório e conversa com cada tutor. Antes do almoço, ela passa na internação para ver os animais internados e planeja a alta de um cão operado ontem.",
      questions: [
        { q: "What kind of practice does Dr. Costa work in?", options: ["A large animal practice", "A small animal practice", "A zoo", "A farm"], a: 1 },
        { q: "Who weighs the animals?", options: ["The owner", "The receptionist", "The veterinary technician", "Dr. Costa"], a: 2 },
        { q: "Why is the puppy at the clinic?", options: ["For its first vaccine", "Because it is limping", "For surgery", "For a check-up"], a: 0 }
      ]
    }
  },
  {
    id: "species", section: "s1", icon: "🐾", title: "Espécies e categorias", en: "Species and animal categories",
    words: [
      W("Dog", "Cão / cachorro", "Dóg", "A domestic animal of the species Canis familiaris; canine.", "The dog wags its tail when the owner arrives."),
      W("Puppy", "Filhote de cão", "Pá-pi", "A young dog.", "The puppy needs three doses of the vaccine."),
      W("Cat", "Gato", "Két", "A domestic animal of the species Felis catus; feline.", "The cat hides under the bed when it is scared."),
      W("Kitten", "Filhote de gato", "Kí-ten", "A young cat.", "The kitten weighs only 800 grams."),
      W("Horse", "Cavalo", "Hórs", "A large animal used for riding and work; equine.", "The horse has a stone in its hoof."),
      W("Foal", "Potro", "Fôul", "A young horse.", "The foal stood up one hour after birth."),
      W("Cattle", "Gado bovino", "Ké-rãl", "Cows, bulls and steers as a group (plural noun); bovine.", "The cattle are vaccinated against foot-and-mouth disease."),
      W("Calf", "Bezerro", "Kéf", "A young cow (plural: calves).", "The calf drinks colostrum in the first hours of life."),
      W("Cow", "Vaca", "Káu", "An adult female of cattle.", "The cow produces 30 liters of milk a day."),
      W("Pig", "Porco / suíno", "Píg", "A farm animal raised for meat; porcine. Also called swine.", "The pig has a fever and is not eating."),
      W("Sheep", "Ovelha / ovino", "Shíip", "A farm animal raised for wool and meat (plural: sheep); ovine.", "The sheep are sheared once a year."),
      W("Goat", "Cabra / caprino", "Gôut", "A farm animal raised for milk and meat; caprine.", "The goat has diarrhea after eating moldy hay."),
      W("Poultry", "Aves de produção", "Pôul-tri", "Chickens, turkeys and ducks raised on farms.", "Poultry farms must control avian influenza."),
      W("Livestock", "Animais de produção / rebanho", "Láiv-stók", "Farm animals kept for food, milk, wool or work.", "Large animal vets treat livestock on farms."),
      W("Exotic pet", "Animal exótico / pet não convencional", "Ig-zó-rik Pét", "An unusual pet such as a rabbit, parrot, reptile or rodent.", "A rabbit is a common exotic pet."),
      W("Breed", "Raça", "Bríid", "A group of animals of the same species with similar characteristics.", "The German Shepherd is a large breed of dog.")
    ],
    reading: {
      title: "Small animals, large animals",
      text: "Veterinary medicine has many areas. Small animal vets treat pets like the dog and the cat, and often exotic pets like rabbits and birds. Large animal vets work on farms with livestock: cattle, pigs, sheep, goats and poultry. Equine vets work only with the horse. Each species is different. A puppy and a kitten need different vaccines, and a calf and a foal have different diseases. Some drugs that are safe in a dog can be toxic to a cat. That is why vets must know the anatomy and physiology of many species.",
      pt: "A medicina veterinária tem muitas áreas. Veterinários de pequenos animais tratam pets como o cão e o gato, e muitas vezes animais exóticos como coelhos e aves. Veterinários de grandes animais trabalham em fazendas com animais de produção: bovinos, suínos, ovinos, caprinos e aves. Veterinários de equinos trabalham só com cavalos. Cada espécie é diferente. Um filhote de cão e um de gato precisam de vacinas diferentes, e um bezerro e um potro têm doenças diferentes. Alguns remédios seguros para o cão podem ser tóxicos para o gato. Por isso o veterinário precisa conhecer a anatomia e a fisiologia de muitas espécies.",
      questions: [
        { q: "Where do large animal vets usually work?", options: ["In hospitals for people", "On farms", "Only in zoos", "In pet shops"], a: 1 },
        { q: "Which of these is livestock?", options: ["A parrot", "A kitten", "Pigs", "A rabbit"], a: 2 },
        { q: "Why must vets know many species?", options: ["Because all animals are the same", "Because species are different and some drugs are toxic to some species", "Because owners ask them", "Because it is easy"], a: 1 }
      ]
    }
  },
  {
    id: "body", section: "s1", icon: "🐕", title: "Anatomia externa", en: "External anatomy of animals",
    words: [
      W("Muzzle", "Focinho (região) / focinheira", "Má-zãl", "The nose and mouth area of an animal; also a device that covers it to prevent biting.", "Put a muzzle on the dog before the exam."),
      W("Snout", "Focinho (do porco)", "Snáut", "The long nose of an animal such as a pig.", "The pig uses its snout to dig."),
      W("Whiskers", "Bigodes / vibrissas", "Uís-kãrs", "Long stiff hairs near the mouth of cats and dogs.", "Cats use their whiskers to feel the space around them."),
      W("Paw", "Pata", "Pó", "The foot of a dog, cat or other animal with claws.", "The dog has a cut on its front paw."),
      W("Paw pad", "Coxim", "Pó Péd", "The thick soft skin under an animal's paw.", "Check the paw pad for burns after a walk on hot asphalt."),
      W("Claw", "Unha / garra", "Klóu", "The sharp curved nail on an animal's toe.", "The cat's claw is too long and is growing into the pad."),
      W("Dewclaw", "Ergô / quinto dedo", "Dú-klóu", "A small toe high on the inside of the leg that does not touch the ground.", "The dewclaw caught on the carpet and broke."),
      W("Hoof", "Casco", "Rúf", "The hard foot of a horse, cow, pig or goat (plural: hooves).", "The farrier trims the hoof every six weeks."),
      W("Mane", "Crina", "Mêin", "The long hair on the neck of a horse.", "The horse's mane is long and dark."),
      W("Withers", "Cernelha", "Uí-dhãrs", "The highest point of the back, between the shoulder blades; used to measure height.", "The horse is 1.6 meters tall at the withers."),
      W("Flank", "Flanco", "Flénk", "The side of the body between the ribs and the hip.", "The cow's left flank is distended."),
      W("Udder", "Úbere", "Á-dãr", "The bag-like organ with the mammary glands of cows, goats and sheep.", "The udder is hot and swollen: maybe mastitis."),
      W("Teat", "Teto (da glândula mamária)", "Tíit", "The part of the udder or mammary gland that the young sucks milk from.", "Clean each teat before milking."),
      W("Coat", "Pelagem", "Kôut", "The hair or fur that covers an animal's body.", "A shiny coat is a sign of good nutrition."),
      W("Tail", "Cauda / rabo", "Têil", "The part at the back end of an animal's body.", "The tail is used to take the temperature of cattle at its base."),
      W("Hock", "Jarrete / tarso", "Rók", "The joint in the middle of the hind leg of dogs, horses and cattle (like our ankle).", "The horse has swelling over the hock.")
    ],
    reading: {
      title: "Parts of the body",
      text: "Animals have many body parts that people do not have. Dogs and cats walk on their toes. Under each paw there is a paw pad, and each toe ends in a claw. Many dogs also have a dewclaw on the inside of the front leg. Cats have long whiskers on the muzzle that help them feel things. Horses and cattle walk on a hoof. The height of a horse is measured at the withers. Dairy cows have an udder with four teats. When you examine any animal, look at the coat, the tail and both flanks, and compare the left and right sides.",
      pt: "Os animais têm muitas partes do corpo que as pessoas não têm. Cães e gatos andam sobre os dedos. Sob cada pata há um coxim, e cada dedo termina em uma unha. Muitos cães também têm um ergô na face interna do membro anterior. Os gatos têm bigodes longos no focinho, que os ajudam a sentir as coisas. Cavalos e bovinos andam sobre cascos. A altura do cavalo é medida na cernelha. Vacas leiteiras têm um úbere com quatro tetos. Ao examinar qualquer animal, observe a pelagem, a cauda e os dois flancos, e compare o lado esquerdo com o direito.",
      questions: [
        { q: "Where is the height of a horse measured?", options: ["At the hock", "At the withers", "At the tail", "At the hoof"], a: 1 },
        { q: "How many teats does a dairy cow have?", options: ["Two", "Four", "Six", "Eight"], a: 1 },
        { q: "What do cats use their whiskers for?", options: ["To eat", "To feel things", "To climb", "To keep warm"], a: 1 }
      ]
    }
  },
  {
    id: "skeleton", section: "s1", icon: "🦴", title: "Esqueleto e músculos", en: "Skeleton and muscles",
    words: [
      W("Skull", "Crânio", "Skál", "All the bones of the head.", "The skull of a cat is short and round."),
      W("Mandible", "Mandíbula", "Mén-di-bãl", "The lower jaw bone.", "The mandible was fractured when the dog was hit by a car."),
      W("Vertebra", "Vértebra", "Vãr-te-bra", "One of the bones of the spine (plural: vertebrae).", "The spinal cord passes through a hole in each vertebra."),
      W("Spinal cord", "Medula espinhal", "Spái-nãl Kórd", "The bundle of nerves inside the vertebral column.", "A disc can compress the spinal cord and cause paralysis."),
      W("Rib", "Costela", "Ríb", "One of the curved bones that protect the chest.", "The cat broke a rib when it fell from the window."),
      W("Scapula", "Escápula", "Ské-piu-la", "The shoulder blade.", "Animals have no collarbone; the scapula is attached only by muscles."),
      W("Humerus", "Úmero", "Riú-me-rãs", "The bone of the upper front leg.", "The humerus connects the shoulder to the elbow."),
      W("Radius", "Rádio", "Rêi-di-ãs", "One of the two bones of the forearm, between the elbow and the carpus.", "Small dogs often fracture the radius when they jump."),
      W("Carpus", "Carpo", "Kár-pãs", "The joint of the front leg that is like our wrist.", "The horse's knee is really the carpus."),
      W("Pelvis", "Pelve", "Pél-vis", "The ring of bones that connects the spine to the hind legs.", "The cat has a fracture of the pelvis after a fall."),
      W("Femur", "Fêmur", "Fí-mãr", "The bone of the thigh.", "The femur is the longest bone of the hind limb."),
      W("Stifle", "Joelho (articulação femorotibial)", "Stái-fãl", "The knee joint of an animal.", "The dog tore a ligament in the stifle."),
      W("Cruciate ligament", "Ligamento cruzado", "Krú-shi-et Lí-ga-ment", "A ligament inside the stifle that keeps the tibia stable.", "Rupture of the cranial cruciate ligament is common in large dogs."),
      W("Tibia", "Tíbia", "Tí-bi-a", "The main bone of the lower hind leg.", "The tibia moves forward when the ligament is torn."),
      W("Forelimb", "Membro torácico / anterior", "Fór-lim", "A front leg. The back leg is the hind limb.", "The dog is not bearing weight on the left forelimb."),
      W("Hind limb", "Membro pélvico / posterior", "Ráind Lim", "A back leg.", "The cat is dragging one hind limb.")
    ],
    reading: {
      title: "The canine skeleton",
      text: "The skeleton of a dog has about 320 bones, but the number changes with the length of the tail. The vertebral column has cervical, thoracic, lumbar, sacral and caudal vertebrae. Dogs and cats have no collarbone, so the scapula is attached to the body only by muscles. In the forelimb, the humerus, radius and ulna and the carpus form the leg. In the hind limb, the femur meets the tibia at the stifle. Inside the stifle, the cranial cruciate ligament keeps the joint stable. When this ligament ruptures, the dog suddenly becomes lame and does not want to bear weight on the leg.",
      pt: "O esqueleto do cão tem cerca de 320 ossos, mas o número varia com o comprimento da cauda. A coluna vertebral tem vértebras cervicais, torácicas, lombares, sacrais e caudais. Cães e gatos não têm clavícula, por isso a escápula é presa ao corpo só por músculos. No membro torácico, úmero, rádio e ulna e o carpo formam a perna. No membro pélvico, o fêmur encontra a tíbia no joelho. Dentro do joelho, o ligamento cruzado cranial mantém a articulação estável. Quando esse ligamento rompe, o cão começa a mancar de repente e não quer apoiar o peso no membro.",
      questions: [
        { q: "Which bone do dogs NOT have?", options: ["The femur", "The collarbone", "The scapula", "The tibia"], a: 1 },
        { q: "Where does the femur meet the tibia?", options: ["At the carpus", "At the hock", "At the stifle", "At the pelvis"], a: 2 },
        { q: "What happens when the cruciate ligament ruptures?", options: ["The dog vomits", "The dog becomes lame", "The dog coughs", "Nothing"], a: 1 }
      ]
    }
  },
  {
    id: "handling", section: "s1", icon: "🦮", title: "Comportamento e manejo", en: "Behavior and handling",
    words: [
      W("Restraint", "Contenção", "Ris-trêint", "Holding an animal safely so it can be examined or treated.", "Gentle restraint reduces stress for the cat."),
      W("Leash", "Guia / coleira de passeio", "Líish", "A strap used to walk and control a dog. Also called lead (UK).", "Keep your dog on a leash in the waiting room."),
      W("Collar", "Coleira", "Kó-lãr", "A band worn around an animal's neck.", "The collar is too tight around his neck."),
      W("Cone", "Colar elizabetano / cone", "Kôun", "A plastic collar that stops an animal licking a wound. Also called an E-collar.", "He must wear the cone for ten days after surgery."),
      W("Carrier", "Caixa de transporte", "Ké-ri-ãr", "A box or bag used to carry a cat or small dog.", "Bring the cat in a carrier, not in your arms."),
      W("Halter", "Cabresto", "Hól-tãr", "A set of straps put on the head of a horse or cow to lead it.", "Put a halter on the horse before the exam."),
      W("Chute", "Tronco de contenção", "Shút", "A narrow pen that holds cattle still for exams and treatments.", "The cows walk into the chute one by one."),
      W("Aggressive", "Agressivo", "A-gré-siv", "Likely to attack or bite.", "Be careful: the dog is aggressive when it is in pain."),
      W("Fearful", "Medroso / com medo", "Fíir-ful", "Feeling afraid.", "A fearful cat may scratch or bite."),
      W("Growl", "Rosnar", "Grául", "A low deep sound a dog makes as a warning.", "Stop the exam if the dog starts to growl."),
      W("Hiss", "Bufar / sibilar", "Rís", "The sound a scared or angry cat makes, like 'sss'.", "A scared cat may hiss at the vet."),
      W("Bite", "Morder / mordida", "Báit", "To cut with the teeth; the wound made by teeth.", "The owner warned that the dog might bite."),
      W("Scratch", "Arranhar / arranhão", "Skrétch", "To cut the skin with claws or nails.", "Trim the claws so the cat cannot scratch you."),
      W("Wag", "Abanar (a cauda)", "Uég", "To move the tail from side to side.", "A dog may wag its tail even when it is anxious."),
      W("Lick", "Lamber", "Lík", "To touch with the tongue.", "Do not let the dog lick the stitches."),
      W("Treat", "Petisco / recompensa", "Tríit", "A small piece of tasty food given as a reward. (Also: to give medical care.)", "Give the puppy a treat after the injection.")
    ],
    reading: {
      title: "Fear Free visits",
      text: "Many animals are afraid of the vet. A fearful dog may growl and a fearful cat may hiss, scratch or bite. Good handling makes the visit safer for everyone. Owners should bring a cat in a closed carrier and a dog on a short leash. In the exam room, the vet speaks softly, moves slowly and uses treats as a reward. Restraint should be gentle and short. If an animal is very aggressive, the vet may use a muzzle or a light sedative. In large animals, a halter is used for horses and a chute for cattle.",
      pt: "Muitos animais têm medo do veterinário. Um cão com medo pode rosnar e um gato com medo pode bufar, arranhar ou morder. Um bom manejo deixa a consulta mais segura para todos. O tutor deve trazer o gato numa caixa de transporte fechada e o cão numa guia curta. No consultório, o veterinário fala baixo, se move devagar e usa petiscos como recompensa. A contenção deve ser suave e curta. Se o animal for muito agressivo, o veterinário pode usar focinheira ou um sedativo leve. Em grandes animais, usa-se o cabresto para cavalos e o tronco para bovinos.",
      questions: [
        { q: "How should a cat come to the clinic?", options: ["In the owner's arms", "On a leash", "In a closed carrier", "In a chute"], a: 2 },
        { q: "What does the vet use as a reward?", options: ["Treats", "A muzzle", "A cone", "A sedative"], a: 0 },
        { q: "What is used to restrain cattle?", options: ["A carrier", "A chute", "A collar", "A cone"], a: 1 }
      ]
    }
  },

  /* ---------------- SEÇÃO 2 ---------------- */
  {
    id: "symptoms", section: "s2", icon: "🤒", title: "Sinais clínicos", en: "Clinical signs",
    words: [
      W("Lethargy", "Letargia / prostração", "Lé-thar-dji", "Being very tired, weak and less active than normal.", "Lethargy and fever are common in infections."),
      W("Lethargic", "Prostrado / apático", "Le-thár-djik", "Very tired and not interested in anything.", "The cat has been lethargic since yesterday."),
      W("Loss of appetite", "Falta de apetite / anorexia", "Lós óv É-pe-táit", "Not wanting to eat. Vets also say anorexia or inappetence.", "Loss of appetite in a cat for more than two days is serious."),
      W("Vomiting", "Vômito", "Vó-mi-rin", "Throwing up food or liquid from the stomach through the mouth.", "The dog has been vomiting since he ate the bone."),
      W("Diarrhea", "Diarreia", "Dái-a-rí-a", "Loose or watery stools. Spelled diarrhoea in the UK.", "The puppy has bloody diarrhea."),
      W("Fever", "Febre", "Fí-vãr", "A body temperature higher than normal.", "A temperature of 40 °C is a fever in a dog."),
      W("Limping", "Mancando / claudicação", "Lím-pin", "Walking unevenly because a leg hurts. Lameness is the medical word.", "The horse is limping on the right forelimb."),
      W("Lameness", "Claudicação", "Lêim-nes", "Abnormal walking because of pain or a problem in a leg.", "The lameness gets worse after exercise."),
      W("Weight loss", "Perda de peso / emagrecimento", "Uêit Lós", "Becoming thinner; losing body weight.", "Weight loss with good appetite may suggest hyperthyroidism in cats."),
      W("Coughing", "Tosse", "Kó-fin", "Pushing air out of the lungs suddenly and noisily.", "The dog started coughing after the stay at the boarding kennel."),
      W("Sneezing", "Espirro", "Sníi-zin", "Pushing air out through the nose suddenly.", "The kitten has sneezing and discharge from the eyes."),
      W("Discharge", "Secreção", "Dís-tchardj", "Fluid that comes out of the eyes, nose, ears or genitals.", "There is a yellow nasal discharge."),
      W("Itching", "Coceira / prurido", "Ít-chin", "A feeling on the skin that makes an animal scratch; pruritus.", "Fleas cause intense itching."),
      W("Hair loss", "Queda de pelo / alopecia", "Hér Lós", "Losing hair from the coat; alopecia.", "There is hair loss around the eyes."),
      W("Drooling", "Salivação excessiva / sialorreia", "Drú-lin", "Saliva coming out of the mouth more than normal.", "Drooling can be a sign of a foreign body in the mouth."),
      W("Seizure", "Convulsão / crise convulsiva", "Síi-jãr", "A sudden abnormal electrical activity in the brain with shaking and loss of control.", "The dog had a seizure that lasted two minutes.")
    ],
    reading: {
      title: "A lethargic dog",
      text: "Thor is a five-year-old Labrador. His owner brings him to the clinic because he has been lethargic for two days. He has a loss of appetite and has been vomiting three times a day. Yesterday he also had diarrhea. He is not coughing or sneezing, and he has no itching. His temperature is 39.9 °C, so he has a mild fever. The owner remembers that Thor ate part of a toy last week. The vet is worried about a foreign body in the intestine and requests radiographs.",
      pt: "Thor é um labrador de cinco anos. O tutor o traz à clínica porque ele está prostrado há dois dias. Ele está sem apetite e vomitando três vezes ao dia. Ontem também teve diarreia. Não está tossindo nem espirrando e não tem coceira. A temperatura é 39,9 °C: está com febre leve. O tutor lembra que Thor comeu parte de um brinquedo na semana passada. O veterinário suspeita de corpo estranho no intestino e pede radiografias.",
      questions: [
        { q: "How long has Thor been lethargic?", options: ["Two hours", "Two days", "Two weeks", "Two months"], a: 1 },
        { q: "Which sign does Thor NOT have?", options: ["Vomiting", "Diarrhea", "Coughing", "Fever"], a: 2 },
        { q: "What does the vet suspect?", options: ["Fleas", "A foreign body", "A seizure", "Kennel cough"], a: 1 }
      ]
    }
  },
  {
    id: "history", section: "s2", icon: "🗣️", title: "Anamnese com o tutor", en: "Taking a history from the owner",
    words: [
      W("What brings you in today?", "O que traz vocês aqui hoje?", "Uót brings iú in tu-dêi?", "A friendly first question to ask the owner the main reason for the visit.", "Good morning! What brings you in today?"),
      W("Presenting complaint", "Queixa principal", "Pri-zén-tin Kom-plêint", "The main problem that made the owner bring the animal.", "The presenting complaint is vomiting for three days."),
      W("How long has he been like this?", "Há quanto tempo ele está assim?", "Ráu lóng réz rí bín láik dhis?", "A question about the duration of the problem.", "How long has he been like this? Since Monday?"),
      W("Is she eating and drinking normally?", "Ela está comendo e bebendo normalmente?", "Iz shí í-rin end drín-kin nór-ma-li?", "A question about appetite and thirst.", "Tell me, is she eating and drinking normally?"),
      W("Neutered", "Castrado (macho ou fêmea)", "Nú-tãrd", "Surgically sterilized. For females you can also say spayed.", "Is your dog neutered?"),
      W("Spayed", "Castrada (fêmea)", "Spêid", "A female that had her ovaries and uterus removed.", "She was spayed when she was six months old."),
      W("Intact", "Inteiro / não castrado", "In-ték", "Not neutered; can still reproduce.", "An intact male dog may roam far from home."),
      W("Up to date", "Em dia (vacinas)", "Áp tu dêit", "Current; with all the recent doses done.", "Are his vaccines up to date?"),
      W("Deworming", "Vermifugação", "Di-uãr-min", "Giving medicine to kill intestinal worms.", "When was the last deworming?"),
      W("Diet", "Dieta / alimentação", "Dái-et", "The food an animal usually eats.", "What diet does he eat: dry food, wet food or homemade?"),
      W("Indoor", "Que vive dentro de casa", "Ín-dór", "Living inside the house. The opposite is outdoor.", "Is she an indoor cat or does she go outside?"),
      W("Other pets", "Outros animais", "Á-dhãr Péts", "Other animals in the same house.", "Are there other pets at home? Are they sick too?"),
      W("Has he had any medication?", "Ele tomou algum remédio?", "Réz rí réd é-ni mé-di-kêi-shãn?", "A question about drugs already given by the owner.", "Has he had any medication? For example, paracetamol at home?"),
      W("Toxin", "Toxina / substância tóxica", "Tók-sin", "A poisonous substance.", "Could he have eaten a toxin, like rat poison or chocolate?"),
      W("Stool", "Fezes", "Stúul", "Feces; the solid waste from the intestine.", "Is the stool soft, liquid or with blood?"),
      W("Urinate", "Urinar", "Iú-ri-nêit", "To pass urine. Owners often say 'pee'.", "Is he able to urinate normally?")
    ],
    reading: {
      title: "A history-taking conversation",
      text: "Vet: Good morning! What brings you in today? Owner: Luna is vomiting and she is very quiet. Vet: How long has she been like this? Owner: Since yesterday morning. Vet: Is she eating and drinking normally? Owner: She is not eating, but she is drinking a lot. Vet: Is she spayed? Owner: No, she is intact. She was in heat about six weeks ago. Vet: Are her vaccines up to date? Owner: Yes. Vet: Has she had any medication? Owner: No. The vet notes the presenting complaint and examines Luna. An intact female drinking a lot after a heat cycle could have pyometra, an infection of the uterus.",
      pt: "Veterinária: Bom dia! O que traz vocês aqui hoje? Tutor: A Luna está vomitando e muito quieta. Veterinária: Há quanto tempo ela está assim? Tutor: Desde ontem de manhã. Veterinária: Ela está comendo e bebendo normalmente? Tutor: Não está comendo, mas está bebendo muita água. Veterinária: Ela é castrada? Tutor: Não, é inteira. Entrou no cio há umas seis semanas. Veterinária: As vacinas estão em dia? Tutor: Sim. Veterinária: Ela tomou algum remédio? Tutor: Não. A veterinária anota a queixa principal e examina a Luna. Uma fêmea inteira bebendo muita água após o cio pode ter piometra, uma infecção do útero.",
      questions: [
        { q: "Is Luna spayed?", options: ["Yes", "No, she is intact", "The owner does not know", "She is a male"], a: 1 },
        { q: "What is unusual about her drinking?", options: ["She does not drink", "She drinks a lot", "She drinks only milk", "Nothing"], a: 1 },
        { q: "What does the vet suspect?", options: ["Pyometra", "A fracture", "Fleas", "Kennel cough"], a: 0 }
      ]
    }
  },
  {
    id: "exam", section: "s2", icon: "🩺", title: "Exame físico", en: "Physical examination",
    words: [
      W("Weigh", "Pesar", "Uêi", "To measure how heavy something is.", "First, let's weigh him on the scale."),
      W("Body condition score", "Escore de condição corporal", "Bó-di Kon-dí-shãn Skór", "A 1-to-9 (or 1-to-5) scale that shows if an animal is too thin or too fat (BCS).", "Her body condition score is 7 out of 9: she is overweight."),
      W("Temperature", "Temperatura", "Têm-pe-ra-tchur", "How hot the body is; in animals it is usually taken in the rectum.", "The rectal temperature is 38.5 °C."),
      W("Pulse", "Pulso", "Páls", "The beat of the heart felt in an artery; in dogs and cats, at the femoral artery.", "The femoral pulse is strong and regular."),
      W("Mucous membranes", "Mucosas", "Miú-kãs Mém-brêins", "The moist pink tissue of the gums and eyes.", "The mucous membranes are pale."),
      W("Capillary refill time", "Tempo de preenchimento capilar", "Ka-pí-la-ri Rí-fil Táim", "The time the gum takes to become pink again after you press it (CRT); normal is under 2 seconds.", "The capillary refill time is 3 seconds: he may be in shock."),
      W("Dehydration", "Desidratação", "Di-rai-drêi-shãn", "Loss of too much water from the body.", "The skin tent shows 8% dehydration."),
      W("Skin tent", "Teste do turgor cutâneo / prega de pele", "Skín Tént", "Lifting the skin to see how fast it returns; slow return suggests dehydration.", "The skin tent stays up for two seconds."),
      W("Lymph nodes", "Linfonodos", "Límf Nôuds", "Small glands of the immune system; vets palpate the submandibular and popliteal ones.", "The popliteal lymph nodes are enlarged."),
      W("Palpate", "Palpar", "Pél-pêit", "To examine with the hands.", "Palpate the abdomen gently."),
      W("Auscultate", "Auscultar", "Ós-kãl-têit", "To listen to the heart, lungs or intestines with a stethoscope.", "Auscultate the heart on both sides of the chest."),
      W("Heart murmur", "Sopro cardíaco", "Rárt Mãr-mãr", "An abnormal sound heard when blood flows through the heart.", "There is a heart murmur on the left side."),
      W("Gums", "Gengivas", "Gáms", "The pink tissue around the teeth.", "Lift the lip and look at the gums."),
      W("Tartar", "Tártaro", "Tár-tãr", "Hard yellow-brown deposit on the teeth.", "There is a lot of tartar on the back teeth."),
      W("Ear canal", "Conduto auditivo", "Íir Ka-nél", "The tube that goes from the outer ear to the eardrum.", "Look into the ear canal with an otoscope."),
      W("Gait", "Marcha / andar", "Gêit", "The way an animal walks or runs.", "Let's watch his gait in the corridor.")
    ],
    reading: {
      title: "From nose to tail",
      text: "A complete physical exam always follows the same order, from nose to tail. First, weigh the animal and give it a body condition score. Look at the eyes, ears and nose for discharge. Lift the lips: look at the teeth for tartar and at the gums. The mucous membranes should be pink, and the capillary refill time should be less than two seconds. Palpate the lymph nodes. Auscultate the heart and lungs and count the heart rate while you feel the femoral pulse. Palpate the abdomen. Check for dehydration with a skin tent. Finally, take the rectal temperature and watch the animal's gait.",
      pt: "Um exame físico completo segue sempre a mesma ordem, do focinho à cauda. Primeiro, pese o animal e dê o escore de condição corporal. Observe olhos, orelhas e nariz em busca de secreção. Levante os lábios: veja se há tártaro nos dentes e examine as gengivas. As mucosas devem estar rosadas, e o tempo de preenchimento capilar deve ser menor que dois segundos. Palpe os linfonodos. Ausculte coração e pulmões e conte a frequência cardíaca enquanto sente o pulso femoral. Palpe o abdome. Avalie a desidratação com a prega de pele. Por fim, meça a temperatura retal e observe a marcha do animal.",
      questions: [
        { q: "What is a normal capillary refill time?", options: ["Less than 2 seconds", "About 5 seconds", "More than 10 seconds", "One minute"], a: 0 },
        { q: "Where do you feel the pulse in a dog?", options: ["At the neck", "At the femoral artery", "At the tail", "At the ear"], a: 1 },
        { q: "How do you check for dehydration?", options: ["With a skin tent", "With an otoscope", "With a stethoscope", "By weighing"], a: 0 }
      ]
    }
  },
  {
    id: "terms", section: "s2", icon: "🔤", title: "Prefixos e sufixos", en: "Building veterinary words",
    words: [
      W("-itis", "-ite (inflamação)", "Ái-tis", "Suffix meaning inflammation. Example: otitis (ear inflammation).", "Otitis is inflammation of the ear: ot + -itis."),
      W("-ectomy", "-ectomia (remoção cirúrgica)", "Ék-to-mi", "Suffix meaning surgical removal. Example: ovariohysterectomy (spay).", "A spay is an ovariohysterectomy; the suffix -ectomy means removal."),
      W("-otomy", "-tomia (incisão)", "Ó-to-mi", "Suffix meaning cutting into an organ. Example: gastrotomy.", "In gastrotomy, the suffix -otomy means a cut into the stomach."),
      W("-algia", "-algia (dor)", "Él-dja", "Suffix meaning pain. Example: arthralgia (joint pain).", "Arthralgia means joint pain: arthr + -algia."),
      W("-emia", "-emia (no sangue)", "Í-mi-a", "Suffix meaning a condition of the blood. Example: anemia, uremia.", "Uremia means urea in the blood: -emia."),
      W("-uria", "-úria (na urina)", "Iú-ri-a", "Suffix meaning a condition of the urine. Example: hematuria.", "Hematuria means blood in the urine: -uria."),
      W("-megaly", "-megalia (aumento)", "Mé-ga-li", "Suffix meaning enlargement. Example: splenomegaly.", "Hepatomegaly is an enlarged liver: -megaly."),
      W("Canine", "Canino (relativo ao cão)", "Kêi-nain", "Relating to dogs. Also the long pointed tooth.", "Canine distemper is a viral disease of dogs."),
      W("Feline", "Felino (relativo ao gato)", "Fí-lain", "Relating to cats.", "Feline leukemia virus is spread by saliva."),
      W("Equine", "Equino (relativo ao cavalo)", "Í-kuain", "Relating to horses.", "Equine colic is a common emergency."),
      W("Bovine", "Bovino", "Bôu-vain", "Relating to cattle.", "Bovine tuberculosis is a zoonosis."),
      W("Hepato-", "Hepato- (fígado)", "Ré-pa-tou", "Prefix or root meaning liver.", "Hepato- means liver, as in hepatopathy."),
      W("Nephro-", "Nefro- (rim)", "Né-frou", "Prefix or root meaning kidney. Renal also refers to the kidney.", "Nephro- means kidney, as in nephrotoxic."),
      W("Hyper-", "Hiper- (acima, excesso)", "Rái-pãr", "Prefix meaning above normal or too much.", "Hyper- means too much, as in hyperthyroidism in old cats."),
      W("Hypo-", "Hipo- (abaixo, deficiência)", "Rái-pou", "Prefix meaning below normal or too little.", "Hypo- means too little, as in hypocalcemia in dairy cows."),
      W("Poly-", "Poli- (muito, aumento)", "Pó-li", "Prefix meaning many or much. PU/PD = polyuria/polydipsia.", "Poly- means much: polydipsia is drinking too much water.")
    ],
    reading: {
      title: "Understanding veterinary words",
      text: "Veterinary words are built from Greek and Latin parts, just like human medical words. A root gives the main meaning, a prefix comes before it and a suffix comes after it. In 'gastritis', gastr- means stomach and -itis means inflammation. In 'polyuria', poly- means much and -uria refers to urine: the animal urinates a lot. There are also special adjectives for each species: canine for dogs, feline for cats, equine for horses, bovine for cattle, ovine for sheep and porcine for pigs. If you learn these parts, you can understand words like 'feline hyperthyroidism' or 'canine hepatitis' without a dictionary.",
      pt: "Palavras veterinárias são formadas por partes gregas e latinas, assim como as da medicina humana. A raiz dá o significado principal, o prefixo vem antes e o sufixo depois. Em 'gastritis', gastr- significa estômago e -itis, inflamação. Em 'polyuria', poly- significa muito e -uria se refere à urina: o animal urina muito. Há também adjetivos próprios para cada espécie: canine para cães, feline para gatos, equine para cavalos, bovine para bovinos, ovine para ovinos e porcine para suínos. Aprendendo essas partes, você entende palavras como 'feline hyperthyroidism' ou 'canine hepatitis' sem dicionário.",
      questions: [
        { q: "What does 'polyuria' mean?", options: ["Blood in the urine", "Urinating a lot", "No urine", "Pain when urinating"], a: 1 },
        { q: "Which adjective refers to horses?", options: ["Bovine", "Feline", "Equine", "Ovine"], a: 2 },
        { q: "'Hepatomegaly' means…", options: ["Enlarged liver", "Liver removal", "Liver pain", "Small liver"], a: 0 }
      ]
    }
  },
  {
    id: "imaging", section: "s2", icon: "🩻", title: "Radiografia e imagem", en: "Radiography and imaging",
    words: [
      W("Radiograph", "Radiografia", "Rêi-di-ou-gréf", "An image of the inside of the body made with X-rays.", "The radiograph shows a fracture of the femur."),
      W("X-ray", "Raio X", "Éks-rêi", "A type of radiation used to make images; also the image itself.", "We need an X-ray of the chest."),
      W("View", "Projeção / incidência", "Viú", "The position from which a radiograph is taken.", "Take one more view of the chest, please."),
      W("Lateral", "Lateral", "Lé-te-ral", "A view taken with the animal lying on its side.", "The right lateral view of the thorax is normal."),
      W("Ventrodorsal", "Ventrodorsal (VD)", "Vén-trou-dór-sal", "A view where the X-ray beam goes from the belly to the back; the animal lies on its back.", "Take a ventrodorsal view of the abdomen."),
      W("Radiopaque", "Radiopaco", "Rêi-di-ou-pêik", "Appearing white on an X-ray because it absorbs the beam.", "Bones and metal are radiopaque."),
      W("Radiolucent", "Radiotransparente", "Rêi-di-ou-lú-sent", "Appearing black on an X-ray because the beam passes through.", "Gas in the intestine is radiolucent."),
      W("Foreign body", "Corpo estranho", "Fó-ren Bó-di", "An object inside the body that should not be there, like a toy or a bone.", "There is a foreign body in the stomach."),
      W("Ultrasound", "Ultrassom / ultrassonografia", "Ál-tra-sáund", "Imaging with sound waves, without radiation.", "The ultrasound confirms the pregnancy."),
      W("Probe", "Transdutor / probe", "Prôub", "The part of the ultrasound machine that touches the skin.", "Clip the hair and apply gel before you place the probe."),
      W("Clip", "Tosar (uma área)", "Klíp", "To cut hair very short with electric clippers.", "Clip the abdomen for the ultrasound."),
      W("CT scan", "Tomografia computadorizada", "Si-tí Skén", "Computed tomography: many X-ray images that make cross-sections of the body.", "The CT scan shows a tumor in the nasal cavity."),
      W("MRI", "Ressonância magnética", "Ém-ar-ái", "Magnetic resonance imaging; very good for the brain and spinal cord.", "The MRI shows a herniated disc in the spine."),
      W("Sedation", "Sedação", "Si-dêi-shãn", "A drug-induced calm, sleepy state.", "The cat needs sedation for the radiographs."),
      W("Lead apron", "Avental de chumbo", "Léd Êi-prãn", "A heavy apron that protects people from radiation.", "Wear a lead apron and gloves when you hold the animal."),
      W("Free fluid", "Líquido livre", "Fríi Flú-id", "Fluid in a body cavity, such as the abdomen, where it should not be.", "The ultrasound shows free fluid in the abdomen.")
    ],
    reading: {
      title: "Taking radiographs safely",
      text: "To diagnose many problems, vets take a radiograph. Bones and metal are radiopaque and look white. Gas is radiolucent and looks black. Soft tissues and fluid look gray. A single view is never enough: we always take at least two views at 90 degrees, usually a lateral and a ventrodorsal view. Many cats and dogs need sedation to stay still. People in the room must wear a lead apron and gloves, and their hands must never be in the beam. For the abdomen, an ultrasound is often better: clip the hair, apply gel and place the probe on the skin. It can show free fluid, stones, tumors and a pregnancy.",
      pt: "Para diagnosticar muitos problemas, o veterinário faz uma radiografia. Ossos e metal são radiopacos e aparecem brancos. O gás é radiotransparente e aparece preto. Partes moles e líquido aparecem cinza. Uma projeção nunca basta: sempre fazemos pelo menos duas a 90 graus, geralmente uma lateral e uma ventrodorsal. Muitos cães e gatos precisam de sedação para ficarem parados. Quem está na sala deve usar avental e luvas de chumbo, e as mãos nunca devem ficar no feixe. Para o abdome, o ultrassom costuma ser melhor: tose o pelo, aplique gel e coloque o transdutor na pele. Ele mostra líquido livre, cálculos, tumores e gestação.",
      questions: [
        { q: "How many views should you take?", options: ["One", "At least two at 90 degrees", "Only a lateral", "Ten"], a: 1 },
        { q: "What does gas look like on a radiograph?", options: ["White", "Gray", "Black", "Red"], a: 2 },
        { q: "What must you do before placing the ultrasound probe?", options: ["Give an injection", "Clip the hair and apply gel", "Take an X-ray", "Wear a cone"], a: 1 }
      ]
    }
  },

  /* ---------------- SEÇÃO 3 ---------------- */
  {
    id: "cardio", section: "s3", icon: "❤️", title: "Sistema cardiovascular", en: "The cardiovascular system",
    words: [
      W("Heart", "Coração", "Rárt", "The organ that pumps blood around the body.", "The heart of a cat beats 140 to 220 times a minute."),
      W("Heart rate", "Frequência cardíaca", "Rárt Rêit", "The number of heartbeats per minute (HR).", "The heart rate of a large dog is 60 to 100 beats per minute."),
      W("Heart failure", "Insuficiência cardíaca", "Rárt Fêil-iãr", "When the heart cannot pump enough blood for the body's needs.", "Congestive heart failure causes fluid in the lungs."),
      W("Mitral valve disease", "Doença valvar mitral / endocardiose", "Mái-tral Vélv Di-zíiz", "Degeneration of the mitral valve; the most common heart disease in small, older dogs.", "Mitral valve disease is common in Cavalier King Charles Spaniels."),
      W("Cardiomyopathy", "Cardiomiopatia", "Kar-di-ou-mai-ó-pa-thi", "A disease of the heart muscle; the hypertrophic form (HCM) is common in cats.", "Hypertrophic cardiomyopathy is the most common heart disease in cats."),
      W("Arrhythmia", "Arritmia", "A-ríth-mi-a", "An irregular heartbeat.", "The ECG shows an arrhythmia."),
      W("Blood pressure", "Pressão arterial", "Blád Pré-shãr", "The force of the blood against the walls of the arteries; measured with a Doppler.", "Old cats with kidney disease often have high blood pressure."),
      W("Echocardiogram", "Ecocardiograma", "É-kou-kár-di-ou-grém", "An ultrasound of the heart.", "The echocardiogram shows an enlarged left atrium."),
      W("Heartworm", "Dirofilária / verme do coração", "Rárt-uãrm", "Dirofilaria immitis, a worm spread by mosquitoes that lives in the heart and lungs.", "Give heartworm prevention every month."),
      W("Pleural effusion", "Efusão pleural", "Plú-ral I-fiú-jãn", "Fluid around the lungs, inside the chest.", "The cat has a pleural effusion and breathes with difficulty."),
      W("Faint", "Desmaiar", "Fêint", "To lose consciousness for a short time. The medical word is syncope.", "The boxer started to faint during exercise."),
      W("Exercise intolerance", "Intolerância ao exercício", "Ék-sãr-sáiz In-tó-le-rãns", "Getting tired very fast during activity.", "Exercise intolerance is an early sign of heart disease."),
      W("Vein", "Veia", "Vêin", "A blood vessel that carries blood back to the heart; the cephalic vein is used for catheters.", "Place the catheter in the cephalic vein."),
      W("Artery", "Artéria", "Ár-te-ri", "A blood vessel that carries blood away from the heart.", "The femoral artery is on the inside of the thigh."),
      W("Pale", "Pálido", "Pêil", "Lighter in color than normal; pale gums suggest anemia or shock.", "The gums are pale and cold."),
      W("Gallop rhythm", "Ritmo de galope", "Gé-lop Rí-dhãm", "An extra heart sound; in cats it often means heart disease.", "There is a gallop rhythm on auscultation.")
    ],
    reading: {
      title: "An old dog with a cough",
      text: "Billy is a twelve-year-old Poodle. For three months he has had exercise intolerance, and now he coughs at night. On auscultation the vet hears a loud heart murmur on the left side, and his heart rate is high. A chest radiograph shows an enlarged heart and fluid in the lungs. The echocardiogram confirms mitral valve disease with congestive heart failure. Billy starts treatment with a diuretic and pimobendan. The owner learns to count his resting breathing rate at home: if it is more than 30 breaths per minute while he sleeps, she must call the clinic.",
      pt: "Billy é um poodle de doze anos. Há três meses tem intolerância ao exercício e agora tosse à noite. Na auscultação o veterinário ouve um sopro alto do lado esquerdo, e a frequência cardíaca está alta. A radiografia de tórax mostra coração aumentado e líquido nos pulmões. O ecocardiograma confirma doença valvar mitral com insuficiência cardíaca congestiva. Billy começa tratamento com diurético e pimobendan. A tutora aprende a contar a frequência respiratória em repouso em casa: se passar de 30 movimentos por minuto enquanto ele dorme, deve ligar para a clínica.",
      questions: [
        { q: "What does the vet hear on auscultation?", options: ["Crackles only", "A heart murmur", "Nothing", "A gallop in the abdomen"], a: 1 },
        { q: "Which test confirms the diagnosis?", options: ["Urinalysis", "Echocardiogram", "Skin scraping", "Fecal test"], a: 1 },
        { q: "When must the owner call the clinic?", options: ["If the sleeping breathing rate is more than 30", "If Billy eats", "Every day", "If he sleeps"], a: 0 }
      ]
    }
  },
  {
    id: "resp", section: "s3", icon: "🫁", title: "Sistema respiratório", en: "The respiratory system",
    words: [
      W("Lungs", "Pulmões", "Lángs", "The two organs in the chest used for breathing.", "Listen to both lungs with the stethoscope."),
      W("Trachea", "Traqueia", "Trêi-ki-a", "The tube that carries air from the throat to the lungs; windpipe.", "Small dogs can have a collapsing trachea."),
      W("Respiratory rate", "Frequência respiratória", "Rés-pi-ra-tó-ri Rêit", "The number of breaths per minute (RR).", "A normal respiratory rate for a resting dog is 10 to 30."),
      W("Dyspnea", "Dispneia", "Disp-ní-a", "Difficulty breathing.", "The cat has dyspnea and is breathing with its mouth open."),
      W("Panting", "Ofegar / respiração ofegante", "Pén-tin", "Fast, shallow breathing with the mouth open; normal in dogs after exercise or in heat.", "Panting in a cat is not normal."),
      W("Open-mouth breathing", "Respiração com a boca aberta", "Ôu-pen máuth Bríi-dhin", "Breathing through the mouth; in cats it is an emergency sign.", "Open-mouth breathing in a cat needs immediate care."),
      W("Kennel cough", "Tosse dos canis / traqueobronquite infecciosa", "Ké-nãl Kóf", "A contagious respiratory infection of dogs, with a honking cough.", "Kennel cough spreads easily in boarding kennels."),
      W("Pneumonia", "Pneumonia", "Nu-môu-ni-a", "An infection or inflammation of the lungs.", "The puppy developed pneumonia after aspiration."),
      W("Crackles", "Crepitações / estertores", "Kré-kãls", "Abnormal clicking sounds in the lungs.", "There are crackles in the right lung."),
      W("Wheeze", "Sibilo", "Uíiz", "A high whistling sound when breathing.", "A cat with asthma may wheeze."),
      W("Feline asthma", "Asma felina", "Fí-lain Éz-ma", "A chronic inflammation of the small airways in cats.", "Feline asthma is treated with steroids."),
      W("Brachycephalic", "Braquicefálico", "Bré-ki-se-fé-lik", "Having a short, flat face, like a Pug, a French Bulldog or a Persian cat.", "Brachycephalic dogs have trouble breathing in hot weather."),
      W("Nostrils", "Narinas", "Nós-trils", "The two openings of the nose.", "Pugs often have very narrow nostrils."),
      W("Snoring", "Ronco", "Snó-rin", "A loud noise when breathing during sleep.", "The French Bulldog has loud snoring."),
      W("Oxygen", "Oxigênio", "Ók-si-djen", "The gas the body needs; given by mask, flow-by or oxygen cage.", "Put the cat in the oxygen cage."),
      W("Thoracocentesis", "Toracocentese", "Tó-ra-kou-sen-tí-sis", "Removing fluid or air from the chest with a needle.", "A thoracocentesis removed 200 mL of fluid.")
    ],
    reading: {
      title: "Short noses, big problems",
      text: "Brachycephalic dogs like Pugs, Bulldogs and French Bulldogs are very popular, but their short faces cause breathing problems. They often have narrow nostrils, a long soft palate and a small trachea. Owners say their dog has loud snoring and gets tired quickly. In hot weather, panting does not cool them well, and they can develop heatstroke. Some dogs need surgery to open the nostrils and shorten the palate. Remember: panting is normal in dogs, but open-mouth breathing or panting in a cat is not normal. A cat with dyspnea needs oxygen first and tests later.",
      pt: "Cães braquicefálicos como pugs, buldogues e buldogues franceses são muito populares, mas o focinho curto causa problemas respiratórios. Eles costumam ter narinas estreitas, palato mole longo e traqueia pequena. Os tutores dizem que o cão ronca alto e se cansa rápido. No calor, ofegar não os resfria bem e eles podem ter hipertermia (insolação). Alguns precisam de cirurgia para abrir as narinas e encurtar o palato. Lembre-se: ofegar é normal no cão, mas respirar com a boca aberta ou ofegar no gato não é. Um gato com dispneia precisa primeiro de oxigênio e depois de exames.",
      questions: [
        { q: "Which dog is brachycephalic?", options: ["A Greyhound", "A Pug", "A German Shepherd", "A Collie"], a: 1 },
        { q: "What can happen to these dogs in hot weather?", options: ["Heatstroke", "Fleas", "Kennel cough", "Fractures"], a: 0 },
        { q: "What does a cat with dyspnea need first?", options: ["A radiograph", "Oxygen", "A bath", "Food"], a: 1 }
      ]
    }
  },
  {
    id: "gi", section: "s3", icon: "🍖", title: "Sistema digestivo", en: "The digestive system",
    words: [
      W("Stomach", "Estômago", "Stá-mãk", "The organ where food is stored and digested after the esophagus.", "The stomach is full of gas."),
      W("Intestine", "Intestino", "In-tés-tin", "The long tube after the stomach (small and large intestine).", "The toy is stuck in the small intestine."),
      W("Rumen", "Rúmen", "Rú-men", "The largest compartment of the stomach of cattle, sheep and goats.", "Bacteria in the rumen digest grass."),
      W("Ruminant", "Ruminante", "Rú-mi-nant", "An animal with four stomach compartments that chews the cud, like a cow.", "A cow is a ruminant."),
      W("Bloat", "Timpanismo / dilatação gástrica", "Blôut", "A dangerous build-up of gas in the stomach or rumen.", "Bloat in cattle can happen after eating wet clover."),
      W("Gastric dilatation-volvulus", "Dilatação-vólvulo gástrica (DVG)", "Gés-trik Di-la-têi-shãn Vól-viu-lãs", "A twisted, gas-filled stomach in large dogs; a surgical emergency (GDV).", "Gastric dilatation-volvulus is common in Great Danes."),
      W("Colic", "Cólica", "Kó-lik", "Abdominal pain, especially in horses.", "The horse with colic is rolling and looking at its flank."),
      W("Parvovirus", "Parvovírus", "Pár-vou-vái-rãs", "A virus that causes severe bloody diarrhea and vomiting in puppies.", "The unvaccinated puppy tested positive for parvovirus."),
      W("Pancreatitis", "Pancreatite", "Pén-kri-a-tái-tis", "Inflammation of the pancreas; often after a fatty meal.", "Pancreatitis often starts after the dog eats fatty food."),
      W("Liver", "Fígado", "Lí-vãr", "The large organ that processes nutrients and removes toxins.", "The liver enzymes are high."),
      W("Constipation", "Constipação / prisão de ventre", "Kons-ti-pêi-shãn", "Difficulty passing feces.", "The old cat has chronic constipation."),
      W("Regurgitation", "Regurgitação", "Ri-gãr-dji-têi-shãn", "Passive return of food from the esophagus, without effort; different from vomiting.", "Regurgitation suggests a problem in the esophagus."),
      W("Hairball", "Bola de pelo / tricobezoar", "Hér-ból", "A ball of swallowed hair that a cat vomits.", "The cat vomits a hairball once a week."),
      W("Chew the cud", "Ruminar", "Tchú dhe Kád", "To chew food again after it comes back from the rumen.", "A healthy cow will lie down and chew the cud for hours."),
      W("Fecal sample", "Amostra de fezes", "Fí-kãl Sém-pãl", "A small amount of feces for laboratory tests.", "Please bring a fresh fecal sample tomorrow."),
      W("Bland diet", "Dieta leve / de fácil digestão", "Blénd Dái-et", "Simple, low-fat food that is easy to digest.", "Feed a bland diet of chicken and rice for three days.")
    ],
    reading: {
      title: "A twisted stomach",
      text: "Duke is a seven-year-old Great Dane. One hour after a big meal, he tries to vomit but nothing comes out. His abdomen is very distended and he is drooling. His gums are pale and his heart rate is high. The vet suspects gastric dilatation-volvulus, or GDV: the stomach is full of gas and has twisted. A radiograph shows the typical 'double bubble'. The team gives fluids, decompresses the stomach and takes Duke to surgery. The surgeon puts the stomach back in place and attaches it to the body wall so it cannot twist again. Without fast treatment, GDV is fatal.",
      pt: "Duke é um dogue alemão de sete anos. Uma hora após uma refeição grande, ele tenta vomitar, mas nada sai. O abdome está muito distendido e ele está babando. As gengivas estão pálidas e a frequência cardíaca alta. O veterinário suspeita de dilatação-vólvulo gástrica (DVG): o estômago está cheio de gás e torceu. A radiografia mostra a típica 'dupla bolha'. A equipe dá fluidos, descomprime o estômago e leva Duke para a cirurgia. O cirurgião recoloca o estômago no lugar e o fixa na parede do corpo para que não torça de novo. Sem tratamento rápido, a DVG é fatal.",
      questions: [
        { q: "What happened to Duke's stomach?", options: ["It was empty", "It filled with gas and twisted", "It had a hairball", "It had worms"], a: 1 },
        { q: "When did the signs start?", options: ["After a big meal", "After a walk in the rain", "After a vaccine", "In the morning before eating"], a: 0 },
        { q: "Which breeds are most at risk?", options: ["Small breeds", "Large, deep-chested breeds like Great Danes", "Cats", "Horses"], a: 1 }
      ]
    }
  },
  {
    id: "renal", section: "s3", icon: "💧", title: "Sistema urinário", en: "The urinary system",
    words: [
      W("Kidney", "Rim", "Kíd-ni", "One of the two organs that filter blood and make urine.", "The left kidney is small and irregular."),
      W("Chronic kidney disease", "Doença renal crônica", "Kró-nik Kíd-ni Di-zíiz", "A slow, permanent loss of kidney function (CKD); very common in old cats.", "Chronic kidney disease is staged with the IRIS system."),
      W("Bladder", "Bexiga", "Blé-dãr", "The organ that stores urine.", "The bladder is large and firm on palpation."),
      W("Urethra", "Uretra", "Iu-rí-thra", "The tube that carries urine out of the bladder.", "Male cats have a very narrow urethra."),
      W("Urethral obstruction", "Obstrução uretral", "Iu-rí-thral Ob-strák-shãn", "A blockage of the urethra so the animal cannot urinate; an emergency in male cats.", "A urethral obstruction can kill a cat in two to three days."),
      W("Straining", "Fazer força (para urinar ou defecar)", "Strêi-nin", "Pushing hard to pass urine or feces; tenesmus or stranguria.", "The cat is straining in the litter box."),
      W("Litter box", "Caixa de areia", "Lí-rãr Bóks", "A box with sand where a cat urinates and defecates. Also called litter tray (UK).", "Clean the litter box every day."),
      W("Hematuria", "Hematúria", "Ri-ma-tiú-ri-a", "Blood in the urine.", "Hematuria is common in cats with cystitis."),
      W("Cystitis", "Cistite", "Sis-tái-tis", "Inflammation of the bladder.", "Stress can cause idiopathic cystitis in cats."),
      W("Bladder stone", "Cálculo vesical / urólito", "Blé-dãr Stôun", "A hard mineral stone in the bladder; urolith.", "The radiograph shows a large bladder stone."),
      W("Polyuria", "Poliúria", "Pó-li-iú-ri-a", "Producing a large volume of urine.", "Polyuria and polydipsia are signs of kidney disease and diabetes."),
      W("Polydipsia", "Polidipsia", "Pó-li-díp-si-a", "Drinking too much water; excessive thirst.", "The dog has polydipsia: he empties the water bowl twice a day."),
      W("Urinalysis", "Urinálise / exame de urina", "Iu-ri-né-li-sis", "Laboratory analysis of urine.", "The urinalysis shows crystals and blood."),
      W("Cystocentesis", "Cistocentese", "Sis-tou-sen-tí-sis", "Collecting urine directly from the bladder with a needle.", "Collect the urine by cystocentesis for culture."),
      W("Urinary catheter", "Sonda uretral", "Iú-ri-ne-ri Ké-the-rãr", "A thin tube put into the bladder through the urethra.", "The blocked cat needs a urinary catheter."),
      W("Specific gravity", "Densidade urinária", "Spe-sí-fik Gré-vi-ri", "A measure of how concentrated the urine is (USG).", "A low urine specific gravity suggests the kidneys cannot concentrate urine.")
    ],
    reading: {
      title: "The blocked cat",
      text: "Tom is a four-year-old neutered male cat. He lives indoors and eats only dry food. The owner says he goes to the litter box many times and is straining, but almost nothing comes out. Today he is vomiting and very lethargic. On palpation, the bladder is huge and firm. Tom has a urethral obstruction. This is an emergency: the potassium in his blood is high, which can stop the heart. The team gives fluids, sedates Tom and places a urinary catheter. The urinalysis shows crystals and hematuria. At home, Tom will drink more water and eat wet food to prevent another obstruction.",
      pt: "Tom é um gato macho castrado de quatro anos. Vive dentro de casa e come só ração seca. A tutora conta que ele vai à caixa de areia muitas vezes e faz força, mas quase nada sai. Hoje ele está vomitando e muito prostrado. Na palpação, a bexiga está enorme e firme. Tom tem uma obstrução uretral. É uma emergência: o potássio no sangue está alto, o que pode parar o coração. A equipe dá fluidos, seda o Tom e coloca uma sonda uretral. A urinálise mostra cristais e hematúria. Em casa, Tom vai beber mais água e comer alimento úmido para evitar nova obstrução.",
      questions: [
        { q: "What is Tom doing in the litter box?", options: ["Sleeping", "Straining", "Eating", "Playing"], a: 1 },
        { q: "Why is the obstruction an emergency?", options: ["High potassium can stop the heart", "He is hungry", "He has fleas", "It is not an emergency"], a: 0 },
        { q: "What will help prevent another obstruction?", options: ["Only dry food", "More water and wet food", "No litter box", "Less exercise"], a: 1 }
      ]
    }
  },
  {
    id: "derm", section: "s3", icon: "🐈", title: "Pele, orelhas e olhos", en: "Skin, ears and eyes",
    words: [
      W("Flea", "Pulga", "Flí", "A small jumping insect that lives on animals and sucks blood.", "I found a flea on the cat's back."),
      W("Flea allergy dermatitis", "Dermatite alérgica à picada de pulga (DAPP)", "Flí É-lãr-dji Dãr-ma-tái-tis", "An allergic reaction to flea saliva; the most common skin disease in dogs and cats.", "Flea allergy dermatitis causes itching near the tail."),
      W("Tick", "Carrapato", "Tík", "A small parasite that bites and stays attached to the skin; it can spread disease.", "Remove the tick with tweezers."),
      W("Mange", "Sarna", "Mêindj", "A skin disease caused by mites, with itching and hair loss.", "Sarcoptic mange is very itchy and contagious."),
      W("Mite", "Ácaro", "Máit", "A very small parasite; some live in the skin or ears.", "An ear mite is very common in kittens."),
      W("Ringworm", "Dermatofitose", "Ríng-uãrm", "A fungal skin infection with round areas of hair loss; it is a zoonosis.", "The kitten has ringworm on its face."),
      W("Hot spot", "Dermatite úmida aguda / hot spot", "Hót Spót", "A red, wet, painful area of infected skin that appears fast.", "The dog licked his leg until he got a hot spot."),
      W("Skin scraping", "Raspado de pele", "Skín Skrêi-pin", "Scraping the skin with a blade to look for mites under the microscope.", "The skin scraping was positive for Demodex."),
      W("Atopic dermatitis", "Dermatite atópica", "Ei-tó-pik Dãr-ma-tái-tis", "A chronic allergic skin disease caused by things in the environment, like dust mites and pollen.", "Atopic dermatitis makes dogs lick their paws."),
      W("Otitis externa", "Otite externa", "Ou-tái-tis Iks-tãr-na", "Inflammation of the outer ear canal.", "The dog shakes his head because of otitis externa."),
      W("Head shaking", "Balançar a cabeça", "Héd Shêi-kin", "Shaking the head; a common sign of ear problems.", "Head shaking and scratching the ears suggest otitis."),
      W("Ear cleaner", "Limpador / ceruminolítico auricular", "Íir Klíi-nãr", "A liquid used to clean the ear canal.", "Use the ear cleaner twice a week."),
      W("Eye drops", "Colírio", "Ái Dróps", "Liquid medicine put into the eye.", "Put one drop of the eye drops in each eye three times a day."),
      W("Corneal ulcer", "Úlcera de córnea", "Kór-ni-al Ál-sãr", "A wound on the surface of the eye; diagnosed with fluorescein stain.", "The fluorescein test shows a corneal ulcer."),
      W("Squinting", "Olho semicerrado / blefaroespasmo", "Skuín-tin", "Keeping the eye partly closed, usually because of pain.", "The cat is squinting with the right eye."),
      W("Cytology", "Citologia", "Sai-tó-lo-dji", "Looking at cells from the skin, ear or a mass under the microscope.", "Ear cytology shows yeast.")
    ],
    reading: {
      title: "The itchy dog",
      text: "Mel is a three-year-old mixed-breed dog. For a month she has been very itchy. She scratches, chews her back near the tail and licks her paws. There is hair loss and a red hot spot on her back. The vet finds a flea and flea dirt in the coat, although the owner says she never sees fleas. The diagnosis is flea allergy dermatitis. A skin scraping is negative for mange. Mel also has head shaking, and ear cytology shows yeast, so she also has otitis externa. The treatment is flea control for all the pets in the house, ear cleaner and ear drops, and medication for the itching.",
      pt: "Mel é uma cadela sem raça definida de três anos. Há um mês ela sente muita coceira. Ela se coça, morde o dorso perto da cauda e lambe as patas. Há queda de pelo e um hot spot vermelho nas costas. O veterinário encontra uma pulga e fezes de pulga na pelagem, embora a tutora diga que nunca vê pulgas. O diagnóstico é dermatite alérgica à picada de pulga. O raspado de pele é negativo para sarna. Mel também balança a cabeça, e a citologia de orelha mostra levedura: ela também tem otite externa. O tratamento é controle de pulgas em todos os animais da casa, limpador auricular e gotas otológicas, e remédio para a coceira.",
      questions: [
        { q: "Where does Mel chew herself?", options: ["On her back near the tail", "On her nose", "On her ears only", "On her belly"], a: 0 },
        { q: "What is the main diagnosis?", options: ["Mange", "Ringworm", "Flea allergy dermatitis", "Corneal ulcer"], a: 2 },
        { q: "Who needs flea control?", options: ["Only Mel", "All the pets in the house", "Only the owner", "Nobody"], a: 1 }
      ]
    }
  },
  {
    id: "prevent", section: "s3", icon: "💉", title: "Vacinas, parasitas e zoonoses", en: "Vaccines, parasites and zoonoses",
    words: [
      W("Vaccine", "Vacina", "Vék-síin", "A product that teaches the immune system to protect against a disease.", "The puppy gets its first vaccine at six to eight weeks."),
      W("Booster", "Reforço", "Bús-tãr", "An extra dose of a vaccine to keep protection.", "Your dog needs a booster every year."),
      W("Core vaccines", "Vacinas essenciais", "Kór Vék-síinz", "Vaccines that every dog or cat should receive, like rabies and distemper.", "Core vaccines protect against serious, common diseases."),
      W("Rabies", "Raiva", "Rêi-bíiz", "A fatal viral disease of the nervous system, spread by bites; a zoonosis.", "Rabies vaccination is required by law in many countries."),
      W("Distemper", "Cinomose", "Dis-tém-pãr", "A serious viral disease of dogs that affects the lungs, gut and brain.", "Distemper can cause seizures months later."),
      W("Feline panleukopenia", "Panleucopenia felina", "Fí-lain Pén-lu-kou-pí-ni-a", "A severe viral disease of cats, similar to canine parvovirus.", "Feline panleukopenia kills many unvaccinated kittens."),
      W("Zoonosis", "Zoonose", "Zou-ou-nôu-sis", "A disease that can pass from animals to people (plural: zoonoses).", "Leptospirosis is an important zoonosis."),
      W("Leptospirosis", "Leptospirose", "Lép-tou-spai-rôu-sis", "A bacterial disease spread by rat urine that damages the kidneys and liver.", "Dogs that swim in floodwater can get leptospirosis."),
      W("Deworm", "Vermifugar", "Di-uãrm", "To give medicine that kills worms.", "Deworm puppies every two weeks until twelve weeks of age."),
      W("Roundworm", "Lombriga / ascarídeo", "Ráund-uãrm", "A common intestinal worm (Toxocara) of puppies and kittens.", "Roundworm eggs can infect children."),
      W("Tapeworm", "Tênia / verme achatado", "Têip-uãrm", "A long flat worm; dogs and cats get it by eating fleas.", "Small white segments near the anus suggest a tapeworm."),
      W("Flea and tick preventive", "Antipulgas e carrapatos", "Flí end Tík Pri-vén-tiv", "A product that protects animals from fleas and ticks.", "Use a flea and tick preventive all year."),
      W("Microchip", "Microchip", "Mái-krou-tchip", "A tiny electronic chip under the skin with an ID number.", "The microchip helped the family find their lost dog."),
      W("Spay", "Castrar (fêmea)", "Spêi", "To remove the ovaries (and usually the uterus) of a female.", "We recommend you spay your cat before the first heat."),
      W("Neuter", "Castrar (macho, ou em geral)", "Nú-tãr", "To sterilize an animal; for males, to remove the testicles.", "Neuter your male cat to reduce spraying."),
      W("Quarantine", "Quarentena", "Kuó-ran-tíin", "A period when an animal is kept apart to prevent the spread of disease.", "Imported animals must stay in quarantine.")
    ],
    reading: {
      title: "One Health",
      text: "Preventive medicine is one of the most important jobs of a vet. Every puppy needs a series of core vaccines against distemper, parvovirus, hepatitis and rabies, and then a booster according to the vaccination protocol. Kittens need vaccines against feline panleukopenia, herpesvirus, calicivirus and rabies. Vets also deworm young animals and recommend a flea and tick preventive. This protects people too: about 60% of human infectious diseases are a zoonosis. Rabies, leptospirosis, ringworm and roundworm can pass from animals to people. This is the idea of One Health: the health of people, animals and the environment is connected.",
      pt: "A medicina preventiva é uma das funções mais importantes do veterinário. Todo filhote de cão precisa de uma série de vacinas essenciais contra cinomose, parvovirose, hepatite e raiva, e depois de reforço conforme o protocolo vacinal. Filhotes de gato precisam de vacinas contra panleucopenia felina, herpesvírus, calicivírus e raiva. O veterinário também vermifuga os animais jovens e recomenda antipulgas e carrapatos. Isso protege as pessoas também: cerca de 60% das doenças infecciosas humanas são zoonoses. Raiva, leptospirose, dermatofitose e lombrigas podem passar dos animais para as pessoas. Essa é a ideia de Saúde Única: a saúde das pessoas, dos animais e do ambiente está conectada.",
      questions: [
        { q: "What is a zoonosis?", options: ["A zoo disease", "A disease that can pass from animals to people", "A vaccine", "A parasite of plants"], a: 1 },
        { q: "Which is a core vaccine for dogs?", options: ["Distemper", "Ringworm", "Tapeworm", "Microchip"], a: 0 },
        { q: "What does 'One Health' mean?", options: ["Only one vet per city", "People, animal and environmental health are connected", "One vaccine for all", "One pet per house"], a: 1 }
      ]
    }
  },

  /* ---------------- SEÇÃO 4 ---------------- */
  {
    id: "pharm", section: "s4", icon: "💊", title: "Medicamentos e prescrição", en: "Medication and prescriptions",
    words: [
      W("Dose", "Dose", "Dôus", "The amount of a medicine given at one time, often in mg/kg.", "The dose is 10 mg/kg twice a day."),
      W("Tablet", "Comprimido", "Té-blet", "A small solid piece of medicine.", "Give half a tablet with food."),
      W("Pill pocket", "Petisco para esconder comprimido", "Píl Pó-ket", "A soft treat with a hole to hide a pill.", "Hide the tablet in a pill pocket."),
      W("Injection", "Injeção", "In-djék-shãn", "Giving a drug with a needle and syringe.", "The cat will receive an injection under the skin."),
      W("Subcutaneous", "Subcutâneo (SC)", "Sab-kiu-têi-ni-ãs", "Under the skin (SC or SQ).", "Give the fluids subcutaneous, between the shoulder blades."),
      W("Intramuscular", "Intramuscular (IM)", "Ín-tra-más-kiu-lãr", "Into a muscle (IM).", "The sedative is given intramuscular in the hind leg."),
      W("Intravenous", "Intravenoso (IV)", "Ín-tra-ví-nãs", "Into a vein (IV).", "Start intravenous fluids now."),
      W("Antibiotic", "Antibiótico", "Én-ti-bai-ó-rik", "A drug that kills or stops bacteria.", "Finish the whole course of the antibiotic."),
      W("Anti-inflammatory", "Anti-inflamatório", "Én-ti-in-flé-ma-tó-ri", "A drug that reduces inflammation and pain; NSAIDs like meloxicam.", "Give the anti-inflammatory with food."),
      W("Painkiller", "Analgésico", "Pêin-ki-lãr", "A drug that reduces pain; analgesic.", "He will go home with a painkiller for five days."),
      W("Side effect", "Efeito colateral", "Sáid I-fékt", "An unwanted effect of a drug.", "Vomiting is a possible side effect."),
      W("Withdrawal period", "Período de carência", "Uith-dró-al Pí-ri-ãd", "The time after a drug before meat or milk from a treated animal can be used for food.", "Respect the withdrawal period before you sell the milk."),
      W("Off-label", "Uso extrabula (fora da bula)", "Óf-lêi-bãl", "Using a drug in a way not written on its label, e.g. a human drug in a dog.", "This drug is used off-label in cats."),
      W("Toxic", "Tóxico", "Tók-sik", "Poisonous; harmful to the body.", "Paracetamol is toxic to cats: never give it."),
      W("Compounded", "Manipulado", "Kom-páun-did", "Specially prepared by a pharmacy, e.g. a flavored liquid for cats.", "We can order a compounded liquid with fish flavor."),
      W("Refill", "Nova receita / reposição", "Rí-fil", "Another supply of the same medicine.", "Call us when you need a refill of the heart medication.")
    ],
    reading: {
      title: "Discharge instructions",
      text: "Rex had surgery on his leg yesterday and is ready to go home. The vet explains the medication to the owner. First, a painkiller and an anti-inflammatory: one tablet of meloxicam once a day with food, for seven days. If Rex has vomiting or black stools, stop the drug and call the clinic, because these can be side effects. Second, an antibiotic: one tablet twice a day for ten days; finish the whole course even if he looks well. Hide the tablets in a pill pocket. Never give human painkillers, like ibuprofen or paracetamol, because they can be toxic to dogs and cats.",
      pt: "Rex operou a perna ontem e está pronto para ir para casa. O veterinário explica a medicação ao tutor. Primeiro, analgésico e anti-inflamatório: um comprimido de meloxicam uma vez ao dia com comida, por sete dias. Se Rex tiver vômito ou fezes pretas, suspenda o remédio e ligue para a clínica, pois podem ser efeitos colaterais. Segundo, um antibiótico: um comprimido duas vezes ao dia por dez dias; termine todo o tratamento mesmo que ele pareça bem. Esconda os comprimidos num petisco. Nunca dê analgésicos humanos, como ibuprofeno ou paracetamol, porque podem ser tóxicos para cães e gatos.",
      questions: [
        { q: "How often is the meloxicam given?", options: ["Twice a day", "Once a day with food", "Every hour", "Once a week"], a: 1 },
        { q: "What should the owner do if Rex has black stools?", options: ["Give more medicine", "Stop the drug and call the clinic", "Nothing", "Give paracetamol"], a: 1 },
        { q: "Why must owners not give ibuprofen?", options: ["It is expensive", "It can be toxic to dogs and cats", "It tastes bad", "It is an antibiotic"], a: 1 }
      ]
    }
  },
  {
    id: "surgery", section: "s4", icon: "🔪", title: "Cirurgia e anestesia", en: "Surgery and anesthesia",
    words: [
      W("Anesthesia", "Anestesia", "É-nes-thí-zi-a", "Drugs that make an animal unconscious and unable to feel pain. Spelled anaesthesia in the UK.", "General anesthesia is safe in healthy animals."),
      W("Premedication", "Medicação pré-anestésica (MPA)", "Prí-me-di-kêi-shãn", "Drugs given before anesthesia to calm the animal and reduce pain.", "The premedication was given IM twenty minutes before induction."),
      W("Induction", "Indução", "In-dák-shãn", "The start of general anesthesia, usually with an IV drug.", "Induction was done with propofol."),
      W("Intubate", "Intubar", "Ín-tiu-bêit", "To put a tube into the trachea to keep the airway open.", "Intubate the cat with a 3.5 mm tube."),
      W("Endotracheal tube", "Sonda endotraqueal", "Én-dou-trêi-ki-al Tiúb", "The tube placed in the trachea during anesthesia.", "Inflate the cuff of the endotracheal tube."),
      W("Fasting", "Jejum", "Fés-tin", "Not eating before anesthesia.", "Fasting for 8 to 12 hours is usual before surgery; water is fine."),
      W("Incision", "Incisão", "In-sí-jãn", "A cut made during surgery.", "The incision is on the midline of the abdomen."),
      W("Sutures", "Pontos / suturas", "Sú-tchãrs", "Stitches used to close a wound.", "The sutures will be removed in ten to fourteen days."),
      W("Stitches", "Pontos", "Stí-tchis", "Common word for sutures.", "Do not let him lick the stitches."),
      W("Sterile", "Estéril", "Sté-rail", "Free of germs. Also: unable to reproduce.", "Use sterile gloves to open the pack."),
      W("Scalpel", "Bisturi", "Skél-pel", "A small sharp surgical knife.", "Pass me the scalpel, please."),
      W("Recovery", "Recuperação anestésica", "Ri-ká-ve-ri", "The time after surgery when the animal wakes up.", "He had a smooth recovery and is already standing."),
      W("Monitor", "Monitorar / monitor", "Mó-ni-tãr", "To watch closely; also the machine that shows vital signs.", "Monitor the heart rate and oxygen during anesthesia."),
      W("Pulse oximeter", "Oxímetro de pulso", "Páls Ók-si-mi-tãr", "A device that measures oxygen in the blood (SpO2), often on the tongue.", "Place the pulse oximeter on the tongue."),
      W("Hemorrhage", "Hemorragia", "Ré-mo-ridj", "Heavy bleeding.", "Check the abdomen for hemorrhage after the spay."),
      W("Wound", "Ferida", "Uúnd", "An injury where the skin is cut or broken.", "Check the wound every day for redness or discharge.")
    ],
    reading: {
      title: "A routine spay",
      text: "Nina, a one-year-old cat, comes in for a spay. Her owner kept her fasting since the night before. A blood test before anesthesia is normal. The technician gives the premedication by injection, places an IV catheter and the vet does the induction with propofol. Nina is intubated with an endotracheal tube and kept asleep with isoflurane. During surgery, the technician will monitor her heart rate, blood pressure and oxygen with a pulse oximeter. The vet makes a small midline incision, removes the ovaries and uterus, checks for hemorrhage and closes with sutures. Nina has a calm recovery and goes home the same day with a cone and painkillers.",
      pt: "Nina, uma gata de um ano, vem para a castração. A tutora a manteve em jejum desde a noite anterior. O exame de sangue pré-anestésico está normal. O técnico aplica a medicação pré-anestésica por injeção, coloca um cateter IV e o veterinário faz a indução com propofol. Nina é intubada com uma sonda endotraqueal e mantida dormindo com isoflurano. Durante a cirurgia, o técnico monitora frequência cardíaca, pressão arterial e oxigênio com o oxímetro de pulso. O veterinário faz uma pequena incisão na linha média, remove ovários e útero, verifica se há hemorragia e fecha com suturas. Nina tem uma recuperação tranquila e vai para casa no mesmo dia, com colar elizabetano e analgésicos.",
      questions: [
        { q: "What did the owner do before surgery?", options: ["Gave a big meal", "Kept her fasting", "Gave antibiotics", "Bathed her"], a: 1 },
        { q: "What is used for induction?", options: ["Isoflurane", "Propofol", "A cone", "Sutures"], a: 1 },
        { q: "What does the pulse oximeter measure?", options: ["Temperature", "Oxygen", "Blood sugar", "Weight"], a: 1 }
      ]
    }
  },
  {
    id: "emergency", section: "s4", icon: "🚑", title: "Emergência e intoxicações", en: "Emergency and poisoning",
    words: [
      W("Triage", "Triagem", "Trí-adj", "Sorting patients by how urgent their condition is.", "At triage, the dog with dyspnea is seen first."),
      W("Hit by car", "Atropelado (HBC)", "Hít bai Kár", "Struck by a vehicle; a common trauma in dogs and cats.", "The cat was hit by car this morning."),
      W("Shock", "Choque", "Shók", "A serious state where the tissues do not get enough blood and oxygen.", "Pale gums and a fast heart rate are signs of shock."),
      W("Fluid therapy", "Fluidoterapia", "Flú-id Thé-ra-pi", "Giving fluids, usually IV, to treat dehydration or shock.", "Start fluid therapy with a crystalloid."),
      W("CPR", "Reanimação cardiopulmonar (RCP)", "Si-pi-ár", "Cardiopulmonary resuscitation: chest compressions and breaths when the heart stops.", "Start CPR immediately: 100 to 120 compressions per minute."),
      W("Cardiac arrest", "Parada cardíaca", "Kár-di-ak A-rést", "When the heart stops pumping.", "Cardiac arrest under anesthesia needs immediate CPR."),
      W("Heatstroke", "Insolação / hipertermia", "Ríit-strôuk", "A dangerous rise in body temperature caused by heat.", "Never leave a dog in a parked car: heatstroke can kill in minutes."),
      W("Poisoning", "Intoxicação / envenenamento", "Pói-zo-nin", "Illness caused by a toxic substance.", "Chocolate poisoning causes vomiting, tremors and arrhythmia."),
      W("Rat poison", "Veneno de rato (raticida)", "Rét Pói-zãn", "A product that kills rats; many cause bleeding.", "The dog ate rat poison two days ago and now has bleeding gums."),
      W("Antidote", "Antídoto", "Én-ti-dôut", "A substance that stops the effect of a poison.", "Vitamin K1 is the antidote for many rat poisons."),
      W("Induce vomiting", "Induzir o vômito", "In-diús Vó-mi-rin", "To make an animal vomit with a drug to remove a toxin from the stomach.", "We can induce vomiting if he ate the grapes less than two hours ago."),
      W("Activated charcoal", "Carvão ativado", "Ék-ti-vei-red Tchár-kôul", "A black powder that binds toxins in the gut.", "Give activated charcoal after the dog vomits."),
      W("Tremors", "Tremores", "Tré-mãrs", "Involuntary shaking movements.", "Tremors started one hour after he ate the chocolate."),
      W("Unconscious", "Inconsciente", "Ãn-kón-shãs", "Not awake and not responding.", "The dog is unconscious and not breathing."),
      W("Bleeding", "Sangramento", "Blíi-din", "Losing blood.", "Apply pressure to stop the bleeding."),
      W("Stabilize", "Estabilizar", "Stêi-bi-laiz", "To make a patient's condition steady and safe.", "First stabilize the patient, then take the radiographs.")
    ],
    reading: {
      title: "Dangerous food for pets",
      text: "Many common foods are toxic to dogs and cats. Chocolate contains theobromine, which can cause vomiting, tremors, seizures and arrhythmia. Grapes and raisins can cause kidney failure in dogs. Xylitol, a sweetener in chewing gum, causes very low blood sugar. Onions and garlic damage red blood cells, especially in cats. Lilies are deadly to cats. If an owner calls about poisoning, ask what the animal ate, how much and when. If it was less than one to two hours ago, the vet can often induce vomiting and give activated charcoal. Some toxins have an antidote, like vitamin K1 for rat poison. Always stabilize the patient first.",
      pt: "Muitos alimentos comuns são tóxicos para cães e gatos. O chocolate contém teobromina, que pode causar vômito, tremores, convulsões e arritmia. Uvas e passas podem causar insuficiência renal em cães. O xilitol, adoçante de chicletes, causa queda grave do açúcar no sangue. Cebola e alho danificam as hemácias, sobretudo em gatos. Lírios são mortais para gatos. Se um tutor liga por intoxicação, pergunte o que o animal comeu, quanto e quando. Se foi há menos de uma a duas horas, muitas vezes é possível induzir o vômito e dar carvão ativado. Algumas toxinas têm antídoto, como a vitamina K1 para raticidas. Sempre estabilize o paciente primeiro.",
      questions: [
        { q: "What can grapes cause in dogs?", options: ["Kidney failure", "Fleas", "Fractures", "Hair loss"], a: 0 },
        { q: "Which plant is deadly to cats?", options: ["Grass", "Lilies", "Mint", "Basil"], a: 1 },
        { q: "What is the antidote for many rat poisons?", options: ["Activated charcoal", "Vitamin K1", "Chocolate", "Xylitol"], a: 1 }
      ]
    }
  },
  {
    id: "lab", section: "s4", icon: "🧪", title: "Exames laboratoriais", en: "Laboratory tests",
    words: [
      W("Blood test", "Exame de sangue", "Blád Tést", "A laboratory analysis of a blood sample.", "We will do a blood test before the anesthesia."),
      W("Complete blood count", "Hemograma", "Kom-plíit Blád Káunt", "A test of red cells, white cells and platelets (CBC).", "The complete blood count shows anemia."),
      W("Biochemistry", "Bioquímica sérica", "Bai-ou-ké-mis-tri", "Tests of the blood serum for organ function, like the liver and kidneys.", "The biochemistry panel shows high urea."),
      W("Packed cell volume", "Hematócrito / volume globular", "Pékt Sél Vó-lium", "The percentage of red cells in the blood (PCV); measured in a small tube.", "The packed cell volume is 18%: severe anemia."),
      W("Anemia", "Anemia", "A-ní-mi-a", "Low number of red blood cells or hemoglobin.", "Tick diseases often cause anemia and low platelets."),
      W("Platelets", "Plaquetas", "Plêit-lets", "Small blood cells that help blood clot.", "Ehrlichia can cause very low platelets."),
      W("Glucose", "Glicose", "Glú-kous", "Sugar in the blood.", "The glucose is 450 mg/dL: the cat is diabetic."),
      W("Urea", "Ureia", "Iu-rí-a", "A waste product removed by the kidneys; called BUN in the US.", "High urea and creatinine suggest kidney disease."),
      W("Creatinine", "Creatinina", "Kri-é-ti-nin", "A waste product used to measure kidney function.", "Creatinine is above the reference interval."),
      W("Liver enzymes", "Enzimas hepáticas", "Lí-vãr Én-zaims", "Proteins like ALT and ALP that rise when the liver is damaged.", "The liver enzymes are high after the poisoning."),
      W("Reference interval", "Intervalo / valor de referência", "Ré-fe-rens Ín-tãr-val", "The range of values expected in healthy animals of that species.", "The result is within the reference interval."),
      W("Blood smear", "Esfregaço sanguíneo", "Blád Smíir", "A thin layer of blood on a glass slide, examined under the microscope.", "Look for parasites on the blood smear."),
      W("Snap test", "Teste rápido", "Snép Tést", "A quick in-clinic test, for example for FIV, FeLV or parvovirus.", "The snap test for parvovirus is positive."),
      W("Fecal flotation", "Exame coproparasitológico por flutuação", "Fí-kãl Flou-têi-shãn", "A test that floats parasite eggs out of a fecal sample.", "The fecal flotation shows roundworm eggs."),
      W("Culture", "Cultura", "Kál-tchãr", "Growing bacteria from a sample to identify them.", "Send the urine for culture and sensitivity."),
      W("Biopsy", "Biópsia", "Bái-op-si", "Removing a piece of tissue to examine it.", "A biopsy is needed to know if the mass is cancer.")
    ],
    reading: {
      title: "A dog with tick fever",
      text: "Bob, a six-year-old dog, has had fever, lethargy and loss of appetite for five days. The owner removed a tick from his ear last month. On the exam, the vet sees small red spots on his gums and the lymph nodes are enlarged. The complete blood count shows anemia, with a packed cell volume of 25%, and very low platelets. The biochemistry is normal, so the liver and kidneys are working well. A snap test is positive for Ehrlichia, a bacteria spread by ticks. Bob starts doxycycline for 28 days, and the owner learns to use a flea and tick preventive every month.",
      pt: "Bob, um cão de seis anos, tem febre, prostração e falta de apetite há cinco dias. O tutor tirou um carrapato da orelha dele no mês passado. No exame, o veterinário vê pequenas manchas vermelhas nas gengivas e os linfonodos estão aumentados. O hemograma mostra anemia, com hematócrito de 25%, e plaquetas muito baixas. A bioquímica está normal, então fígado e rins funcionam bem. Um teste rápido é positivo para Ehrlichia, uma bactéria transmitida por carrapatos. Bob começa doxiciclina por 28 dias, e o tutor aprende a usar antipulgas e carrapatos todo mês.",
      questions: [
        { q: "What did the owner find last month?", options: ["A flea", "A tick", "A worm", "A mite"], a: 1 },
        { q: "What is very low in the blood count?", options: ["Glucose", "Platelets", "Urea", "Liver enzymes"], a: 1 },
        { q: "Which test gave the diagnosis?", options: ["Biopsy", "Fecal flotation", "Snap test", "Urinalysis"], a: 2 }
      ]
    }
  },
  {
    id: "abbrev", section: "s4", icon: "📋", title: "Abreviações veterinárias", en: "Veterinary abbreviations",
    words: [
      W("DVM", "Médico-veterinário (título)", "Dí-ví-ém", "Doctor of Veterinary Medicine (US title). In the UK: BVSc or MRCVS.", "Ana Souza, DVM, signed the certificate."),
      W("SOAP", "SOAP (formato de prontuário)", "Sôup", "Subjective, Objective, Assessment, Plan: a way to write medical records.", "Write your notes in SOAP format."),
      W("BAR", "Alerta, ativo e responsivo", "Bí-ei-ár", "Bright, alert and responsive: a normal mental state.", "Patient is BAR, eating well."),
      W("QAR", "Quieto, alerta e responsivo", "Kiú-ei-ár", "Quiet, alert and responsive: calmer than normal but OK.", "The cat is QAR after anesthesia."),
      W("TPR", "Temperatura, pulso e respiração", "Tí-pí-ár", "Temperature, pulse and respiration.", "Check TPR every four hours."),
      W("BCS", "Escore de condição corporal (ECC)", "Bí-si-és", "Body condition score.", "BCS 4/9, ideal weight."),
      W("CRT", "Tempo de preenchimento capilar (TPC)", "Si-ár-tí", "Capillary refill time.", "MM pink, CRT less than 2 seconds."),
      W("MM", "Mucosas", "Ém-ém", "Mucous membranes.", "MM pale and tacky."),
      W("PU/PD", "Poliúria e polidipsia", "Pí-iú Pí-dí", "Polyuria and polydipsia: urinating and drinking a lot.", "The old dog has PU/PD."),
      W("V/D", "Vômito e diarreia", "Ví Dí", "Vomiting and diarrhea.", "Puppy presented with V/D for two days."),
      W("SID", "1x ao dia (SID)", "És-ai-dí", "Once a day (from Latin semel in die).", "Prednisolone 1 mg/kg PO SID."),
      W("BID", "2x ao dia (12/12h)", "Bí-ai-dí", "Twice a day (from Latin bis in die).", "Amoxicillin-clavulanate PO BID for 10 days."),
      W("PO", "Via oral (VO)", "Pí-ôu", "By mouth (from Latin per os).", "Give the tablet PO with food."),
      W("NPO", "Jejum", "Én-pi-ôu", "Nothing by mouth.", "Keep the patient NPO from midnight."),
      W("OHE", "Ovário-histerectomia (OSH)", "Ôu-êitch-í", "Ovariohysterectomy: spay surgery.", "OHE scheduled for Tuesday."),
      W("FIV", "Vírus da imunodeficiência felina (FIV)", "Éf-ai-ví", "Feline immunodeficiency virus.", "The snap test for FIV and FeLV is negative.")
    ],
    reading: {
      title: "A SOAP note",
      text: "S: 9-year-old FS DSH cat. Owner reports PU/PD and weight loss for one month; good appetite. Indoor, vaccines up to date. O: QAR. Weight 3.8 kg (was 4.6 kg). BCS 3/9. T 38.4 °C, HR 180, RR 28. MM pink, CRT under 2 s. Mild dehydration. A: Diabetes mellitus vs. hyperthyroidism vs. chronic kidney disease. P: CBC, biochemistry, T4, urinalysis by cystocentesis. Recheck in 2 days with the results. Keep on regular diet; do not keep NPO.",
      pt: "S (Subjetivo): gata de 9 anos, fêmea castrada, SRD de pelo curto. Tutor relata poliúria/polidipsia e perda de peso há um mês; bom apetite. Vive dentro de casa, vacinas em dia. O (Objetivo): quieta, alerta e responsiva. Peso 3,8 kg (era 4,6 kg). ECC 3/9. T 38,4 °C, FC 180, FR 28. Mucosas rosadas, TPC abaixo de 2 s. Desidratação leve. A (Avaliação): diabetes mellitus vs. hipertireoidismo vs. doença renal crônica. P (Plano): hemograma, bioquímica, T4, urinálise por cistocentese. Retorno em 2 dias com resultados. Manter dieta habitual; não deixar em jejum.",
      questions: [
        { q: "What does 'PU/PD' mean?", options: ["Pulse and pressure", "Urinating and drinking a lot", "Pain and depression", "Pupils dilated"], a: 1 },
        { q: "In SOAP, what comes in 'A'?", options: ["Appetite", "Assessment", "Anesthesia", "Address"], a: 1 },
        { q: "How is the urine collected?", options: ["From the litter box", "By cystocentesis", "With a catheter", "It is not collected"], a: 1 }
      ]
    }
  },
  {
    id: "falsefriends", section: "s4", icon: "⚠️", title: "Falsos cognatos", en: "False friends",
    words: [
      W("Constipation", "Prisão de ventre (NÃO é resfriado)", "Kons-ti-pêi-shãn", "Difficulty passing feces. 'Resfriado' is 'a cold'.", "Constipation is common in old cats with kidney disease."),
      W("Injury", "Lesão / ferimento (NÃO é injúria)", "Ín-dju-ri", "Physical damage to the body.", "The horse has a leg injury from the fence."),
      W("Pretend", "Fingir (NÃO é pretender)", "Pri-ténd", "To act as if something is true when it is not.", "Some dogs pretend to be lame to get attention."),
      W("Intend", "Pretender / ter a intenção", "In-ténd", "To plan to do something.", "We intend to discharge him tomorrow."),
      W("Attend", "Comparecer (NÃO é atender)", "A-ténd", "To go to an event or place.", "The owner did not attend the recheck appointment."),
      W("Sensible", "Sensato (NÃO é sensível)", "Sén-si-bãl", "Reasonable, with good judgment.", "Vaccinating the puppy is a sensible decision."),
      W("Sensitive", "Sensível", "Sén-si-tiv", "Easily affected; reacting strongly.", "Collies can be sensitive to ivermectin."),
      W("Exquisite pain", "Dor intensa e localizada (NÃO é 'esquisita')", "Éks-kui-zit Pêin", "Very intense, sharp, well-localized pain.", "There is exquisite pain on palpation of the spine."),
      W("Physician", "Médico de humanos (NÃO é físico)", "Fi-zí-shãn", "A doctor who treats people. A 'physicist' studies physics; an animal doctor is a veterinarian.", "The owner's physician asked about the cat with ringworm."),
      W("Groom", "Escovar / cuidar da pelagem (groom também é noivo)", "Grúum", "To clean and brush an animal's coat. As a noun, it also means bridegroom.", "Cats groom themselves for hours a day."),
      W("Put down", "Eutanasiar / sacrificar (NÃO é 'pôr no chão' aqui)", "Pút dáun", "Informal way to say to euthanize an animal (also 'put to sleep').", "The owners decided to put down their old dog."),
      W("Put to sleep", "Eutanasiar (NÃO é anestesiar)", "Pút tu Slíip", "Euphemism for euthanasia. To say anesthesia, say 'under anesthesia'.", "Be careful: 'put to sleep' means euthanasia, not anesthesia."),
      W("Pet", "Animal de estimação; também 'acariciar'", "Pét", "A companion animal; as a verb, to stroke an animal gently.", "You can pet the dog, he is friendly."),
      W("Litter", "Ninhada (e também areia sanitária)", "Lí-rãr", "A group of young born at the same time; also cat litter.", "The bitch had a litter of eight puppies."),
      W("Bitch", "Cadela (termo técnico, sem ofensa)", "Bítch", "The correct technical word for a female dog; offensive only in slang.", "The bitch is in heat; we can spay her after."),
      W("Intoxicated", "Embriagado (geralmente por álcool)", "In-tók-si-kei-red", "Usually drunk from alcohol. For 'intoxicação' use poisoning.", "We say poisoned dog, not intoxicated dog: intoxicated means drunk.")
    ],
    reading: {
      title: "Careful with false friends!",
      text: "Brazilian vets often make mistakes with false friends. If an owner says 'my cat has constipation', the cat cannot pass feces; it does not have a cold. An 'injury' is a physical lesion, not an insult. 'Put to sleep' and 'put down' mean euthanasia: never say 'we will put your dog to sleep' when you mean anesthesia! Say 'your dog will be under general anesthesia'. In breeding, 'bitch' is the correct word for a female dog and a 'litter' is a group of puppies born together. And when a dog eats rat poison, it is 'poisoning', not 'intoxication'.",
      pt: "Veterinários brasileiros frequentemente erram com falsos cognatos. Se um tutor diz 'my cat has constipation', o gato não consegue defecar; ele não está resfriado. 'Injury' é uma lesão física, não uma ofensa. 'Put to sleep' e 'put down' significam eutanásia: nunca diga 'we will put your dog to sleep' quando quer dizer anestesia! Diga 'your dog will be under general anesthesia'. Em reprodução, 'bitch' é a palavra correta para a fêmea do cão e 'litter' é a ninhada. E quando um cão come veneno de rato, é 'poisoning', não 'intoxication'.",
      questions: [
        { q: "'Put to sleep' usually means…", options: ["Anesthesia", "Euthanasia", "Sedation", "Rest"], a: 1 },
        { q: "How should you say that a dog will be anesthetized?", options: ["We will put him down", "He will be under general anesthesia", "We will put him to sleep", "He will be intoxicated"], a: 1 },
        { q: "A 'litter' in breeding is…", options: ["A group of puppies born together", "Trash", "A bed", "A disease"], a: 0 }
      ]
    }
  }
];

/* Casos clínicos simples: o foco é a leitura em inglês, não a dificuldade clínica. */
const CASES = [
  {
    id: "c1", title: "The puppy with bloody diarrhea", level: "Fácil", topic: "gi",
    text: "A ten-week-old puppy was adopted from a shelter last week. Since yesterday he has been vomiting and has bloody diarrhea with a very bad smell. He is lethargic and does not want to eat. He has had only one vaccine. The snap test for parvovirus is positive. The puppy is hospitalized in the isolation ward with IV fluids, anti-nausea drugs and antibiotics.",
    glossary: { "shelter": "abrigo", "bloody": "com sangue", "smell": "cheiro", "isolation ward": "internação de isolamento", "anti-nausea": "antiemético" },
    questions: [
      { q: "How old is the puppy?", options: ["Ten days", "Ten weeks", "Ten months", "Ten years"], a: 1 },
      { q: "Which test is positive?", options: ["FIV", "Parvovirus", "Heartworm", "Ehrlichia"], a: 1 },
      { q: "Where does the puppy stay?", options: ["At home", "In the isolation ward", "In the waiting room", "In surgery"], a: 1 }
    ]
  },
  {
    id: "c2", title: "Hit by car", level: "Fácil", topic: "skeleton",
    text: "A two-year-old cat was hit by car this morning. She is quiet but alert. She does not bear weight on her right hind limb, and there is swelling over the thigh. Her gums are pink and her breathing is normal. After pain relief, the vet takes radiographs in two views. They show a fracture of the femur. The cat is referred to an orthopedic surgeon.",
    glossary: { "bear weight": "apoiar o peso", "swelling": "inchaço", "pain relief": "analgesia", "referred": "encaminhada", "thigh": "coxa" },
    questions: [
      { q: "Which leg is injured?", options: ["Left forelimb", "Right hind limb", "Right forelimb", "None"], a: 1 },
      { q: "What do the radiographs show?", options: ["A fracture of the femur", "A foreign body", "Pneumonia", "Nothing"], a: 0 },
      { q: "What happens first?", options: ["Surgery", "Pain relief", "Vaccination", "Discharge"], a: 1 }
    ]
  },
  {
    id: "c3", title: "Thirsty old cat", level: "Fácil", topic: "renal",
    text: "A fifteen-year-old cat is drinking and urinating much more than before. She has lost weight and sometimes vomits. Her coat is dull. On palpation, both kidneys are small. The blood test shows high urea and creatinine, and the urine specific gravity is low. The diagnosis is chronic kidney disease. She starts a kidney diet and the owner learns to give subcutaneous fluids at home.",
    glossary: { "dull": "opaca, sem brilho", "kidney diet": "dieta renal", "learns": "aprende", "at home": "em casa" },
    questions: [
      { q: "What signs does the cat have?", options: ["Drinking and urinating a lot", "Coughing", "Itching", "Limping"], a: 0 },
      { q: "What is the diagnosis?", options: ["Diabetes", "Chronic kidney disease", "Fleas", "Asthma"], a: 1 },
      { q: "What will the owner give at home?", options: ["Subcutaneous fluids", "Chocolate", "Ibuprofen", "Nothing"], a: 0 }
    ]
  },
  {
    id: "c4", title: "The horse with colic", level: "Médio", topic: "gi",
    text: "A farmer calls because his horse is rolling on the ground, pawing and looking at its flank. The horse did not eat its hay this morning. The vet arrives and finds a heart rate of 60 beats per minute and no gut sounds on the right side. A rectal exam and an ultrasound suggest a twisted intestine. The horse is sent to an equine hospital for emergency surgery.",
    glossary: { "rolling": "rolando", "pawing": "cavando com a pata", "hay": "feno", "gut sounds": "sons intestinais / borborigmos", "twisted": "torcido" },
    questions: [
      { q: "What is the horse doing?", options: ["Eating", "Rolling and looking at its flank", "Sleeping", "Running"], a: 1 },
      { q: "What is wrong with the gut sounds?", options: ["They are very loud", "There are none on the right side", "They are normal", "The vet did not listen"], a: 1 },
      { q: "Where is the horse sent?", options: ["Home", "To an equine hospital", "To a cattery", "To a pet shop"], a: 1 }
    ]
  },
  {
    id: "c5", title: "The ear that smells", level: "Fácil", topic: "derm",
    text: "A four-year-old Cocker Spaniel has head shaking and scratches his left ear. The ear is red and has a brown discharge with a bad smell. He cries when the vet touches it. Ear cytology shows yeast and bacteria. The diagnosis is otitis externa. The vet cleans the ear canal and prescribes ear drops twice a day for two weeks, and a recheck after that.",
    glossary: { "scratches": "coça", "cries": "chora / gane", "yeast": "levedura", "recheck": "retorno" },
    questions: [
      { q: "What color is the discharge?", options: ["Brown", "Clear", "Green", "White"], a: 0 },
      { q: "What does the cytology show?", options: ["Mites", "Yeast and bacteria", "Fleas", "Nothing"], a: 1 },
      { q: "How often are the drops given?", options: ["Once a week", "Twice a day", "Every hour", "Once"], a: 1 }
    ]
  },
  {
    id: "c6", title: "The dog that ate chocolate", level: "Médio", topic: "emergency",
    text: "At ten o'clock at night, an owner calls the emergency clinic. Her small dog ate a bar of dark chocolate about one hour ago. The vet asks for the weight of the dog and the type and amount of chocolate. The dose of theobromine is dangerous. At the clinic, the vet induces vomiting and gives activated charcoal. The dog is hyperactive and has a fast heart rate, so he stays on fluids and an ECG monitor overnight.",
    glossary: { "bar": "barra", "dark chocolate": "chocolate amargo", "amount": "quantidade", "overnight": "durante a noite" },
    questions: [
      { q: "When did the dog eat the chocolate?", options: ["One hour ago", "Yesterday", "One week ago", "We don't know"], a: 0 },
      { q: "What does the vet do first at the clinic?", options: ["Surgery", "Induce vomiting", "A vaccine", "A bath"], a: 1 },
      { q: "Why does the dog stay overnight?", options: ["He is hyperactive with a fast heart rate", "He is hungry", "He has fleas", "The owner is busy"], a: 0 }
    ]
  },
  {
    id: "c7", title: "The cow with a hot udder", level: "Médio", topic: "species",
    text: "A dairy cow produces less milk than usual. One quarter of her udder is hot, hard and painful, and the milk from that teat has clots. She has a fever of 40.2 °C. The vet diagnoses clinical mastitis and takes a milk sample for culture. The cow receives an antibiotic into the teat and an anti-inflammatory. The farmer must respect the withdrawal period and must not sell her milk.",
    glossary: { "dairy cow": "vaca leiteira", "quarter": "quarto mamário", "clots": "grumos", "milk sample": "amostra de leite" },
    questions: [
      { q: "What is wrong with the milk?", options: ["It has clots", "It is blue", "It is normal", "There is too much"], a: 0 },
      { q: "What is the diagnosis?", options: ["Bloat", "Clinical mastitis", "Colic", "Rabies"], a: 1 },
      { q: "Why can't the farmer sell the milk?", options: ["Because of the withdrawal period", "Because it is cold", "Because the cow is old", "He can sell it"], a: 0 }
    ]
  },
  {
    id: "c8", title: "The cat that cannot breathe", level: "Médio", topic: "cardio",
    text: "An eight-year-old male cat is brought in with open-mouth breathing. Yesterday he was hiding and did not eat. His respiratory rate is 60 and the vet hears a gallop rhythm. The team gives oxygen first and handles him very little. A quick ultrasound shows pleural effusion, and a thoracocentesis removes fluid from the chest. The echocardiogram later shows hypertrophic cardiomyopathy.",
    glossary: { "hiding": "escondido", "handles him very little": "manipula o mínimo possível", "quick": "rápido", "later": "depois" },
    questions: [
      { q: "How is the cat breathing?", options: ["Normally", "With the mouth open", "Slowly", "Not at all"], a: 1 },
      { q: "What does the team give first?", options: ["Oxygen", "Food", "A vaccine", "A bath"], a: 0 },
      { q: "What is the final diagnosis?", options: ["Feline asthma", "Hypertrophic cardiomyopathy", "Ringworm", "Kidney disease"], a: 1 }
    ]
  }
];

/* Mensagens motivacionais. */
const QUOTES = [
  "“Until one has loved an animal, a part of one's soul remains unawakened.” — Anatole France",
  "“The greatness of a nation can be judged by the way its animals are treated.” — attributed to Mahatma Gandhi",
  "“The veterinarian's job is to be the voice of those who cannot speak.”",
  "“Between animal and human medicine there is no dividing line — nor should there be.” — Rudolf Virchow",
  "“Dogs are not our whole life, but they make our lives whole.” — Roger Caras",
  "“One World, One Health.”"
];

/* Recursos: fontes oficiais, dicionários e materiais para estudar inglês veterinário. */
const RESOURCES = [
  { group: "Fontes oficiais e manuais (em inglês)", items: [
    ["MSD Veterinary Manual", "https://www.msdvetmanual.com/", "Referência clínica gratuita, com versão para tutores em inglês simples."],
    ["WOAH – World Organisation for Animal Health", "https://www.woah.org/en/home/", "Organização Mundial de Saúde Animal: doenças, fichas e normas."],
    ["CDC – One Health", "https://www.cdc.gov/one-health/", "Zoonoses e Saúde Única."],
    ["WSAVA – Global Guidelines", "https://wsava.org/global-guidelines/", "Diretrizes de vacinação, dor, nutrição e odontologia."],
    ["AAHA – Guidelines", "https://www.aaha.org/resources/", "Diretrizes da American Animal Hospital Association."],
    ["RECOVER Initiative – CPR", "https://recoverinitiative.org/", "Diretrizes de RCP veterinária."],
    ["ASPCA Animal Poison Control", "https://www.aspca.org/pet-care/animal-poison-control", "Lista de alimentos e plantas tóxicas para pets."],
    ["Fear Free Pets", "https://fearfreepets.com/", "Manejo com baixo estresse."]
  ]},
  { group: "Dicionários", items: [
    ["Cambridge Dictionary", "https://dictionary.cambridge.org", "Inglês geral, com áudio US/UK."],
    ["Oxford Learner's Dictionaries", "https://www.oxfordlearnersdictionaries.com/us", "Definições simples para estudantes."],
    ["Merriam-Webster Medical", "https://www.merriam-webster.com/medical", "Dicionário médico (muitos termos servem para a veterinária)."],
    ["TheFreeDictionary – Medical", "https://medical-dictionary.thefreedictionary.com", "Inclui o Saunders Comprehensive Veterinary Dictionary."]
  ]},
  { group: "Pronúncia e tradução em contexto", items: [
    ["YouGlish", "https://youglish.com", "Ouça a palavra em vídeos reais do YouTube."],
    ["Forvo", "https://forvo.com", "Pronúncia gravada por falantes nativos."],
    ["Context Reverso", "https://context.reverso.net/traducao/", "Tradução com exemplos de frases."],
    ["Linguee", "https://www.linguee.com", "Tradução com exemplos."]
  ]},
  { group: "Vídeos e cursos", items: [
    ["Cornell Feline Health Center – Videos", "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center", "Saúde felina em inglês."],
    ["VETgirl", "https://vetgirlontherun.com/", "Podcasts e webinars de emergência e clínica."],
    ["TED-Ed", "https://ed.ted.com/", "Vídeos com transcrição e quiz."],
    ["Coursera – Animal health", "https://www.coursera.org/search?query=veterinary", "Cursos gratuitos de universidades em inglês."]
  ]},
  { group: "Nivelamento e inglês geral", items: [
    ["British Council – Level test", "https://learnenglish.britishcouncil.org/english-levels/online-english-level-test", "Teste gratuito (CEFR A1–C2)."],
    ["Cambridge – Test your English", "https://www.cambridgeenglish.org/test-your-english/", "Teste gratuito."],
    ["News in Levels", "https://www.newsinlevels.com/", "Notícias em três níveis de dificuldade."]
  ]},
  { group: "Podcasts e séries para treinar o ouvido", items: [
    ["Veterinary Information Network (VIN) Podcast", "https://www.vin.com/", "Conteúdo profissional em inglês."],
    ["The Animal Doctors (Pet Doctors)", "", "Podcasts de clínica de pequenos animais."],
    ["Séries", "", "All Creatures Great and Small, The Incredible Dr. Pol, Bondi Vet, The Supervet — assista com legenda em inglês."]
  ]}
];
