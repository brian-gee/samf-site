export interface responseData {
    title: string;
    userId: number;
    body: string;
}

export async function get() {
    return {
        body: JSON.stringify([
            {
                "title": "Test Event",
                "userId": 30,
                "body": "This is a test event"
            }, 
        ])
    };
}