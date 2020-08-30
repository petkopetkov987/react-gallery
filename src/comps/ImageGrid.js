import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1.5 }}
                    onClick={() => setSelectedImg(doc.url) }
                >
                    <motion.img src={doc.url} alt="The pic is uploaded" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    />
                    <button class="btn">Delete</button>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;