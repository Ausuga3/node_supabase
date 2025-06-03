const { createClient } = require('@supabase/supabase-js');
const fs = require('fs'); // Para leer archivos locales
//const mime = require('mime-types');  // Para detectar el tipo MIME de los archivos (opcional, pero recomendado)


// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL; // URL de Supabase
const supabaseKey = process.env.SUPABASE_ANON_KEY; // clave pública
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para cargar un archivo
async function uploadFile(bucketName, filePath, fileName) {
    try {
        // Leer el archivo desde el sistema de archivos
        const fileBuffer = fs.readFileSync(filePath);

        // ---Detectar el tipo MIME automáticamente---
        //const contentType = mime.lookup(filePath) || 'application/octet-stream';


        // Subir el archivo al bucket
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, fileBuffer, {
                contentType: 'image/jpeg/png'// Agrega el tipo de archivo -para usar nime-types solo se usa la variable contentType
            });

        if (error) {
            throw error;
        }

        console.log('Archivo subido con éxito:', data);
    } catch (error) {
        console.error('Error al subir el archivo:', error.message);
    }
}


module.exports = { uploadFile };