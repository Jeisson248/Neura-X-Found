from flask import Flask, request, render_template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route('/')
def formulario():
    return render_template('formulario.html')

@app.route('/enviar_queja', methods=['POST'])
def enviar_queja():
    nombre = request.form['nombre']
    correo = request.form['correo']
    queja = request.form['queja']

    # Configurar información del correo
    remitente = 'jmcb946@gmail.com'
    destinatario = 'jfmartinez86@misena.edu.co '
    asunto = 'Nueva Queja'

    # Crear el cuerpo del correo
    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto
    cuerpo = f'Nombre: {nombre}\nCorreo: {correo}\nQueja: {queja}'
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    # Enviar el correo utilizando SMTP
    servidor = smtplib.SMTP('smtp.gmail.com', 587)
    servidor.starttls()
    servidor.login(remitente, 'tu_contraseña')
    servidor.sendmail(remitente, destinatario, mensaje.as_string())
    servidor.quit()

    return 'Queja enviada con éxito.'

if __name__ == '__main__':
    app.run(debug=True)
