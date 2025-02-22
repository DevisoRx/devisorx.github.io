function copyPassword(event) {
    const passwordInput = document.getElementById('password');
    
    // Seleciona o texto dentro da caixa de senha
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Exibe a mensagem de "copiado" perto do cursor
    const copyMessage = document.getElementById('copy-message');
    
    // Posições da mensagem perto do cursor
    copyMessage.style.left = `${event.pageX + 10}px`;
    copyMessage.style.top = `${event.pageY + 10}px`;

    // Exibe a mensagem
    copyMessage.style.display = 'block';
    
    // Depois de 1.5 segundos, a mensagem desaparece
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 1500);
}

function generatePassword() {
    const lengthInput = document.getElementById('length');
    let length = parseInt(lengthInput.value);
    
    // Validando a quantidade de caracteres
    if (length < 8) {
        length = 8; // Se for menor que 8, define para 8
        lengthInput.value = 8;
    } else if (length > 32) {
        length = 32; // Se for maior que 32, define para 32
        lengthInput.value = 32;
    }
    
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    
    // Gera a senha aleatória com o número de caracteres especificado
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Define a senha gerada no input de senha
    document.getElementById('password').value = password;
}
