// pages/api/subscribe.js (Next.js API route)
import mailchimp from "@mailchimp/mailchimp_marketing";


mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., "us3"
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        console.log(email);

        try {
            const response = await mailchimp.lists.addListMember(
                process.env.MAILCHIMP_LIST_ID,
                {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: "a", // You can customize these
                        LNAME: "b",
                    },
                },
                { skip_merge_validation: true }
            );

            

            console.log(
                `Successfully added contact as an audience member. The contact's id is ${response.id}.`
            );

            return res.status(200).json({ message: 'Subscribed successfully!' }); // Send JSON response
        }
        catch (error) {
            console.error("Mailchimp Error:", error);
            if (error.response) {
                console.error("Mailchimp Response:", error.response.data); // Log the response data
                console.error("Mailchimp Status:", error.response.status); // Log the status code
                console.error("Mailchimp Headers:", error.response.headers); // Log the headers
            }
            return res.status().json({ error: 'Failed to subscribe. Please try again later.' }); // Send JSON error response
        }
    } else {
        return res.status(405).end(); // Method Not Allowed
    }
}
