import { useStore } from '@tanstack/react-store';
import { appStore } from '../store/appStore';
import { useNombre } from '@/context/useNombre';

function Adios() {
    const theme = useStore(appStore, (state) => state.theme);
    //CONTEXTO COMPARTIDO
    const{nombre} = useNombre();

    //ESTADO-CONTEXTO LOCAL AL COMPONENTE
    //const[prop, setProp] = useState<string>('Hola');

  return (
    <>
    <div className ={`flex flex-col justify-center items-center min-h-[calc(100vh-4.5rem)] ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="grow flex flex-col items-center justify-center">
      <h1 className='hola text-2xl font-bold'>Adiós {nombre}.</h1>
      </main>
    </div>
    </>
  )
}

export default Adios