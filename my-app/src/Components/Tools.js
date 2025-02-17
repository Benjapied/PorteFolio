
function fillImage(src) { 
    const img = new Image(); 
    img.src = src; img.onload = () => { 
        const width = img.width; 
        const height = img.height; 
        if (width > height) { 
            return "w-full"; 
        } else { 
            return "h-full"; 
        } 
    }; 
}

export default fillImage;