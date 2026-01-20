function shareOn(platform) {
    const url = encodeURIComponent("https://visionuxlab.com.mx/");
    const text = encodeURIComponent("Descubre Vision UX Lab, un espacio donde el diseño se encuentra con la accesibilidad. ¡Diseña más allá de la vista! Visítalo aquí:");
    let shareUrl = "";

    switch (platform) {
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case "messenger":
            shareUrl = `https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${url}`;
            break;
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case "whatsapp":
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
}