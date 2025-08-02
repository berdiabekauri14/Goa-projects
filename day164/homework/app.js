const http = require('http'); // შევიყავთ http მოდული

let messages = []; // შექმნით ცარიელ მასივს, სადაც შევინახავთ შეტყობინებებს

const server = http.createServer((req, res) => { // შევქმნით http სერვერს
    if (req.url === '/messages' && req.method === 'POST') { // თუ URL არის /messages და მეთოდი POST
        // შევქმნით ცარიელ სტრიქონს, სადაც შევინახავთ შეტყობინების სხეულს

        let body = '';
        
        // მოვისმენთ მონაცემებს, რომლებიც მოდის მოთხოვნის სხეულიდან
        
        req.on('data', chunk => {
            body += chunk;
        });
        
        // როდესაც მონაცემების მიღება დასრულდება, შევინახავთ შეტყობინებას მასივში
        // და გავუგზავნით პასუხს

        req.on('end', () => {
            messages.push(body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Message saved in array');
        });

    } else if (req.url === '/messages' && req.method !== 'POST') { // თუ URL არის /messages და მეთოდი არ არის POST
        // გავუგზავნით ყველა შეტყობინებას, რომელიც შევინახეთ მასივში

        res.statusCode = 400;
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Error happened');
    } else {
        // თუ URL არ ემთხვევა /messages ან მეთოდი არ არის POST, გავუგზავნით 404 შეცდომას

        console.log('Not Found');
        res.statusCode = 404;
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => { // სერვერი დაიწყებს მუშაობას 3000 პორტზე
    // დააბეჭდავს კონსოლში შეტყობინებას, რომ სერვერი მუშაობს
    console.log('Server is running on port 3000');
});