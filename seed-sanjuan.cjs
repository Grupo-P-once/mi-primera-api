const { initializeApp } = require('firebase/app')
const { getFirestore, doc, setDoc } = require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAX8OiWKAdAG5i6YIrYDbcfg6iYJBsf0ok",
  authDomain: "vivebien-f4027.firebaseapp.com",
  projectId: "vivebien-f4027",
  storageBucket: "vivebien-f4027.firebasestorage.app",
  messagingSenderId: "842723346477",
  appId: "1:842723346477:web:d32ad4cf96d3333d7cd0a4"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function seed() {
  await setDoc(doc(db, 'propiedades', 'sanjuan'), {
    titulo: 'Nave Industrial San Juan',
    tipo: 'nave',
    operacion: 'renta',
    precio: 45000,
    ubicacion: 'San Juan Bosco, León, Gto.',
    descripcion: 'Nave industrial de primer nivel ubicada en el parque industrial San Juan Bosco. Cuenta con acceso directo a la carretera, piso de concreto reforzado, sistema eléctrico trifásico y andenes de carga. Ideal para manufactura, logística y almacenaje.',
    metros: 1200,
    alturaLibre: 8.5,
    andenes: 3,
    estatus: 'disponible',
    amenidades: [
      'Piso de concreto reforzado',
      'Sistema eléctrico trifásico',
      'Andenes de carga',
      'Vigilancia 24/7',
      'Acceso a carretera',
      'Oficinas administrativas',
      'Sanitarios',
      'Estacionamiento'
    ],
    fotos: [
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&auto=format&fit=crop'
    ],
    whatsapp: '524778116501',
    mantenimiento: 5000,
    createdAt: new Date()
  })
  console.log('Sanjuan seeded OK')
  process.exit(0)
}

seed().catch(e => { console.error('Error:', e.message); process.exit(1) })
