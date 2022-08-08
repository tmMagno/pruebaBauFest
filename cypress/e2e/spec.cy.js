describe('Challenge Baufest', () => {
  //En el siguiente it se crea un usuario nuevo 
  it('altaUsuario', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#signin2').click();
    cy.wait(1000);
    //Existe posible defecto sobre el input #sing-username, no se completa correctamente. Se desconoce error (cypress o web)
    cy.get('#sign-username').type('PruebaBauFest');
    cy.wait(2000);
    cy.get('#sign-password').type('adminTM');
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(7000);
  });

  it('Confirmacion signUp', () => {
    cy.on('window:alert',(str) => {
    expect(str.to.equal('Sign up successful.'))
    })
  })


  it('Login con usuario creado y agregar laptop al carrito', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#login2').click();
    cy.wait(1000);
    cy.get('#loginusername').type('PruebaBauFest');  
    cy.wait(5000);
    cy.get('#loginpassword').type('adminTM');
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click(); 
    cy.wait(10000);
    //agregar laptop al cart
    cy.get('[class=list-group-item]').eq(2).click();
    cy.wait(2000);
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click();
    cy.get('#tbodyid > div.row > div > a').click();
  });
  
  
  it('Confirmacion add to cart', () => {
  cy.on('window:alert',(str) => {
    expect(str.to.equal('Product added.'))
  })
  })

  it('Logout con usuario creado', () => {
    cy.get('#logout2').click();
  })

  
})




