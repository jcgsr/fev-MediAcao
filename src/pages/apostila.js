import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

import Button from "react-bootstrap/Button";

const Apostila = () => {
	return (
		<Layout>
			<Seo title="Apostila" />
			<div className="apostila">
				<h1>Apostila</h1>
				<article className="card-body">
					<StaticImage
						src="../images/img/apostila.jpeg"
						layout="constrained"
						placeholder="blurred"
						alt="Foto de um relógio de areia"
						width={700}
						height={500}
					/>
					<p>
						Esta apostila foi elaborada para agilizar e facilitar a intervenção
						do terapeuta ABA no Domínio percepção visual no nível intermediário.
					</p>
					<p>
						O terapeuta terá 20 estímulos e mais de 100 imagens que poderão ser
						impressas para trabalhar as habilidades de percepções visuais,
						linguagem e narrativa, em uma escala de opções que oportuniza a
						execução de 1 mês de atividades variadas com a área de
						desenvolvimento destacada para o Marco percepção visual.
					</p>
					<p>
						Mais comodidade e variabilidade para sua intervenção ABA em um
						material de riquíssima qualidade visual.
					</p>
					Para adquiri-la, basta clicar no botão abaixo:
				</article>
				<div className="btn-apostila">
					<a
						href="https://www.hotmart.com/pt-BR?gclid=CjwKCAiAvaGRBhBlEiwAiY-yMEaGpoiF61AsAAZM0hB0AGTelCfRzHWtZiqfnWzwrsMWtvVugV2amxoC7d0QAvD_BwE"
						target="_blank"
						rel="noopener"
					>
						<Button className="btn">Comprar Apostila</Button>
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default Apostila;
