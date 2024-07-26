/// <reference types="cypress"/>


describe('tarefas', () => {

    let testData;
    before(() => {
        cy.fixture('tasks').then(t => {
            testData = t
        })

    })

    context('Cadastro', () => {

        it('Deve cadastrar Dados Pessoais e de acesso validos', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');

            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);
            // senha valida
            cy.get('[data-cy="input-signup-personal-data-password"]').type(mock.senha1);
            // confirmação de senha valida
            cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(mock.senha1);
            // drop
            cy.get('button[aria-controls="dropdown-button-1"]').click();

            cy.get('span').contains(mock.inglesBeginner).click();
            // lgpd            
            cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
            // click submit 'proximo'
            cy.get('[data-cy="button-signup_submit_button_1"]').click();

            // cep 
            cy.get('[data-cy="input-signup-address-cep"]').type(mock.cep).blur();

            cy.get('[data-cy="input-signup-address-number"]').type(mock.numeroResidencial)

            
            cy.get('[data-cy="button-signup_submit_button_3"]')

        })




    })

    context('Campos obrigatorios', () => {

        it('Campo nome deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            // cy.get('#signup-personal-data-firstName').type('');
            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-firstName')
        })


        it('Campo Sobrenome deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-lastName')
        })

        it('Campo Data de nascimento deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);

            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-birthDate')
        })

        it('Campo CPF deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);

            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-cpf')
        })

        it('Campo E-mail deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);



            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-email')
        })

        it('Campo Confirme seu E-mail deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);


            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-email-confirm')
        })


        it('Campo Insira sua senha deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);

            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-password')
        })

        it('Campo Confirme sua senha deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);
            // senha valida
            cy.get('[data-cy="input-signup-personal-data-password"]').type(mock.senha1);

            cy.get('[data-cy="button-signup_submit_button_1"]').click();
            cy.isRequired('Preencha este campo.', '#signup-personal-data-password-confirm')
        })


        it('Campo Nível de proficiência na língua inglesa deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');
            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);
            // senha valida
            cy.get('[data-cy="input-signup-personal-data-password"]').type(mock.senha1);
            // confirmação de senha valida
            cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(mock.senha1);

            cy.get('[data-cy="button-signup_submit_button_1"]').click();

            cy.isRequired('Preencha este campo.', 'input[name="signup-personal-english-level"]');
        })


        it('Campo LGPD deve ser obrigatorio', () => {
            const mock = testData.baseData
            // 
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');

            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);
            // senha valida
            cy.get('[data-cy="input-signup-personal-data-password"]').type(mock.senha1);
            // confirmação de senha valida
            cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(mock.senha1);
            // drop
            cy.get('button[aria-controls="dropdown-button-1"]').click();
            cy.get('span').contains(mock.inglesBeginner).click();


            // click submit 'proximo'
            cy.get('[data-cy="button-signup_submit_button_1"]').click();

            cy.isRequired('Marque esta caixa se deseja continuar.', '#signup-personal-data-lgpd');

        })

        
        it('Campo Número residencial deve ser obrigatorio', () => {
            const mock = testData.baseData
            cy.visitAndClickButton('/', '[data-cy="button-btn-enroll"]');

            // nome
            cy.get('[data-cy="input-signup-personal-data-firstName"]').type(mock.nome);
            // sobrenome
            cy.get('[data-cy="input-signup-personal-data-lastName"]').type(mock.sobrenome);
            // data de nascimento
            cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(mock.dataNascimento);
            // cpf valido
            cy.get('[data-cy="input-signup-personal-data-cpf"]').type(mock.CpfValido);
            // email valido
            cy.get('[data-cy="input-signup-personal-data-email"]').type(mock.eMail1);
            //  confirmação de email valido
            cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(mock.eMail1);
            // senha valida
            cy.get('[data-cy="input-signup-personal-data-password"]').type(mock.senha1);
            // confirmação de senha valida
            cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(mock.senha1);
            // drop
            cy.get('button[aria-controls="dropdown-button-1"]').click();

            cy.get('span').contains(mock.inglesBeginner).click();
            // lgpd            
            cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
            // click submit 'proximo'
            cy.get('[data-cy="button-signup_submit_button_1"]').click();

            // cep 
            cy.get('[data-cy="input-signup-address-cep"]').type(mock.cep).blur();

            cy.get('[data-cy="button-signup_submit_button_3"]').click()
           
            cy.isRequired('Preencha este campo.', '[data-cy="input-signup-address-number"]');

        })


    })

    

})