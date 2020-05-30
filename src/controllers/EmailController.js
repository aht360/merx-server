
const nodemailer = require('nodemailer');

exports.sendEmail = async (request, response) => {

    const data = request.body;
    const { name, toSend, toSubject, toText } = data;

    const remetente = nodemailer.createTransport({
        service:'gmail',
 
        auth: {
            user: 'augustohenriquest@gmail.com',
            pass: 'xo5ws9zo'
        }
    });

    const emailSend = {
        from: 'augustohenriquest@gmail.com',
        to: 'augustohenriquest@gmail.com',
        subject: 'Enviado do site',
        html: '<strong>Email enviado por:</strong> ' + name + '.<br/><strong>Assunto</strong>: ' + toSubject + ' <br/><strong>Mensagem:</strong> ' + toText + '. <br/><strong>Entre em contato com ela pelo email:</strong> ' + toSend
    }

    remetente.sendMail(emailSend,
        function(error){
            if(error){
                console.log(error);
            } else{
                console.log("Email enviado com sucesso!");
            }
        }
    )

    return response.json(data);
};
