import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { readFileSync } from 'fs'

// Read .env.local
const envContent = readFileSync('.env.local', 'utf-8')
const env = {}
envContent.split('\n').forEach(line => {
  const m = line.match(/^([^=]+)=(.+)$/)
  if (m) env[m[1].trim()] = m[2].trim()
})

const app = initializeApp({
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

const db = getFirestore(app)

await setDoc(doc(db, 'propiedades', 'sanjuan'), {
  titulo: 'Nave Industrial San Juan',
  tipo: 'nave',
  operacion: 'renta',
  precio: 85000,
  ubicacion: 'Parque Industrial San Juan, León, Guanajuato',
  descripcion: 'Nave industrial de alto estándar ubicada estratégicamente en el Parque Industrial San Juan, León Guanajuato. Ideal para manufactura, logística o almacenaje de alto volumen. Accesos amplios para tráilers de doble eje, planta eléctrica de respaldo, sistema contra incendios certificado, vigilancia 24/7 con CCTV y oficinas administrativas integradas. A 10 min del Blvd. Aeropuerto y 15 min del centro de León.',
  metros: 2500,
  alturaLibre: 10,
  andenes: 3,
  estatus: 'disponible',
  fotos: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565793892461-ab4ca21abb50?w=1200&auto=format&fit=crop'
  ],
  amenidades: [
    'Andén de carga x3', 'Planta eléctrica', 'Vigilancia 24/7',
    'Acceso tráilers', 'Sistema contra incendios', 'Oficinas administrativas',
    'Estacionamiento', 'Internet fibra óptica', 'Piso epóxico', 'Subestación eléctrica'
  ],
  whatsapp: '524778116501',
  mantenimiento: 8500,
})

console.log('✅ Nave Industrial San Juan publicada en Firestore')
process.exit(0)
