export const formAction = async ({ request }: { request: Request }) => {
    const formData = new URLSearchParams(await request.text());
    const name = formData.get('name');

    console.log('Form submitted with name:', name);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true }); 
        }, 1000);
    });
};
