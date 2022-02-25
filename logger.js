import models from './models.js';
import db from 'mongoose';

// Logs chat messages
const connStr = 'MONGO DB CONNECTION STRING HERE';

async function logChat({fromPlayerName, messageText, fromPlayerId}) {
    const message = new models.ChatMessage({
        fromPlayerName: fromPlayerName,
        fromPlayerId: fromPlayerId,
        messageText: messageText,
        date: Date.now()
    })
    db.connect(connStr).then(() => {
        message.save()
    });

}

export default {
    logChat
}
