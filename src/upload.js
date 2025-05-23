const { createClient } = require('@supabase/supabase-js');
const fs = require('fs'); // Para leer archivos locales

// Configuración de Supabase
const supabaseUrl = 'https://jnviodghnkbfitaqtupc.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = process.env.SUPABASE_ANON_KEY; // Reemplaza con tu clave pública
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para cargar un archivo
async function uploadFile(bucketName, filePath, fileName) {
    try {
        // Leer el archivo desde el sistema de archivos
        const fileBuffer = fs.readFileSync(filePath);

        // Subir el archivo al bucket
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, fileBuffer, {
                contentType: 'image/jpeg', // Cambia el tipo MIME según el archivo
            });

        if (error) {
            throw error;
        }

        console.log('Archivo subido con éxito:', data);
    } catch (error) {
        console.error('Error al subir el archivo:', error.message);
    }
}

// Llamar a la función
uploadFile('mi-bucket', './public/assets/imagen_prueba.jpeg', 'imagen_prueba.jpeg');

module.exports = { uploadFile };