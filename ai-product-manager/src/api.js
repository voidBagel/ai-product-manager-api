import axios from "axios";

const url = "http://localhost:5000/api/proposal/generate";

export const generateProposal = async (idea) => {
    try {

        const response = await axios.post(url, { "idea": idea });
        return response.data;
    } catch (error) {
        console.error("Error generating proposal:", error.response.data);
        throw error;
    }

};
