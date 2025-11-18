import { useStore } from '@tanstack/react-store';
import { appStore } from '../store/appStore';
import { useNombre } from '@/context/useNombre';

function Hola() {
    const theme = useStore(appStore, (state) => state.theme);
    //CONTEXTO COMPARTIDO
    const{nombre, setNombre} = useNombre();

    //ESTADO-CONTEXTO LOCAL AL COMPONENTE
    //const[prop, setProp] = useState<string>('Hola');

  return (
    <>
    <div className ={`flex flex-col justify-center items-center min-h-[calc(100vh-4.5rem)] ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="grow flex flex-col items-center justify-center p-4 text-center">
      <h1 className='hola text-2xl font-bold mb-4'>Hola {nombre}, ¿quieres cambiar tu nombre?</h1>
      <input
        className={`border w-full max-w-xs px-4 py-2 rounded-full focus:outline-none focus:ring-2 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700 focus:ring-cyan-500' 
            : 'bg-white border-gray-300 focus:ring-cyan-600'
        }`} 
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe un nombre..."
        />
      </main>
    </div>
    </>
  )
}

export default Hola