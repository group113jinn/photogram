 export async function uploadImg(ev) {
    console.log("Hello");
    const CLOUD_NAME = "jinn113"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', 'group113');
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        console.log("data",data.secure_url);
        return data

    } catch (err) {
        console.log(err);
    }
}