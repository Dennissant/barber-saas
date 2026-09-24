function Footer() {
    return (
        <footer className="text-center">
            <p>© 2026 BarberSaaS. Todos os direitos reservados.</p>
                <ul className="flex gap-5 list-none justify-center">
                    <li><a href="/termos">Termos de Serviço</a></li>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
        </footer>
    );
}
export default Footer;