projeto_trainee

O projeto consiste na criação de uma aplicação web simples. Os usuários
dessa aplicação deverão se cadastrar fornecendo nome, e-mail, senha e,
opcionalmente, uma foto de perfil. Além disso em algum momento o sistema deve
consumir e usar os dados de qualquer API. Após o cadastro, o usuário pode fazer login usando o e-mail e senha informados.

Implementação

A aplicação final deverá ser seguir os seguintes critérios:

● Quatro páginas: Login/Cadastro do usuário, uma página home, exibida
somente quando o usuário está autenticado e uma página de perfil do
usuário, na qual ele pode alterar sua foto;

● No cadastro, o usuário deve informar um e-mail válido e senha, que serão
guardados no banco de dados. Se possível, salve a senha na forma de um
hash (sugestão: utilize bcrypt). Não é boa prática guardar senhas
diretamente no banco de dados. Também informar seu nome e,
opcionalmente, fazer um upload de uma imagem para seu perfil;

● Na página home (exibida somente para usuários autenticados), você deve
consumir uma API de sua escolha e exibir dados na tela.

● Na página usuário, devem ser mostradas as informações nome, e-mail, de
forma travada ( inalterável ) e a foto do usuário, com a opção de alterar ou
inserir foto.

Consumo de API