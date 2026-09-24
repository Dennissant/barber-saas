import './Footer.css';
function Footer() {
    return (
        <footer>
            <p>© 2026 BarberSaaS. Todos os direitos reservados.</p>
            <section className="links-suporte">
                <ul>
                    <li><a href="/termos">Termos de Serviço</a></li>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </section>
        </footer>
    );
}
export default Footer;