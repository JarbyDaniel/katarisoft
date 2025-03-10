import { motion } from "framer-motion";
import { useState } from "react";

const Actions = ({ onStart, onStop, isSimulating }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStartSimulation = () => {
        onStart();
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                className="flex justify-center space-x-2 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.button
                    className={`text-white py-2 px-4 rounded flex-1 shadow-md ${
                        isSimulating 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500'
                    }`}
                    whileHover={{ scale: isSimulating ? 1 : 1.05 }}
                    whileTap={{ scale: isSimulating ? 1 : 0.95 }}
                    onClick={() => !isSimulating && setIsModalOpen(true)}
                    disabled={isSimulating}
                >
                    {isSimulating ? 'Corriendo' : 'Iniciar'}
                </motion.button>
                <motion.button
                    className={`text-white py-2 px-4 rounded flex-1 shadow-md ${
                        !isSimulating 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-red-600 hover:bg-red-500'
                    }`}
                    whileHover={{ scale: !isSimulating ? 1 : 1.05 }}
                    whileTap={{ scale: !isSimulating ? 1 : 0.95 }}
                    onClick={onStop}
                    disabled={!isSimulating}
                >
                    Detener
                </motion.button>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-xl w-96 border border-gray-700"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">Selecciona el tipo de inicio</h2>
                        <button className="w-full bg-gray-700 text-gray-400 py-2 px-4 rounded mb-2 cursor-not-allowed" disabled>
                            🚀 Iniciar misión completa (Dispositivos NO detectados)
                        </button>
                        <button className="w-full bg-gray-700 text-gray-400 py-2 px-4 rounded mb-2 cursor-not-allowed" disabled>
                            🛠️ Iniciar prueba unitaria (Dispositivos NO detectados)
                        </button>
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded mb-4 shadow-md"
                            onClick={handleStartSimulation}
                        >
                            📊 Iniciar utilizando datos simulados
                        </button>
                        <button
                            className="w-full bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded shadow-md"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancelar
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Actions;