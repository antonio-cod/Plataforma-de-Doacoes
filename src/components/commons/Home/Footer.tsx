 import React from "react";
 import { FaInstagram } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";
 import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			<footer className="bg-yellow-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5">  
					<ul>
						<p className="text-blue-600 font-bold text-3xl pb-6">
						Faça sua doação-<span className="text-blue-600">MT</span>
						</p>
						<li className="text-gray-800 text-md pb-2 font-semibold">
						Você pode conhecer todas as entidades que fazem pare da plataforma,
						escolher uma ou mais, ajudar na realização dos projetos com sua doação.
						Você pode ser um agente transformador que fomenta a arte e promove
						 a inserção de muitas crianças, jovens e adultos através do 
						 desenvolvimento de atividades artísticas, tornando a realidade de cada
						  uma delas muito mais enriquecidade de arte e cultura.
						</li>
						<div className="flex gap-6 pb-5">
						  <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-600 font-bold text-2xl pb-4">Entidades</p>
						<li className="text-gray-800 text-md pb-7 font-semibold hover:text-blue-600 cursor-pointer">
							Instituto Casarão das Artes  
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						Instituto Joana Darc
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Associação Entre Patas
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Flor de Atalaia
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						Associação Barranco Alto II
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						Grupo Fraterno Associação Espírita Joanna de Ângelis
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						ASCA – Associação Social Civil Abaiuc
						</li>
					
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-600 font-bold text-2xl pb-4">Equipe</p>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Desenvolvimento
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Produção
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						Arte/Visual
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Acessoria de Empresa
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-blue-600 font-bold text-2xl pb-4">Suporte</p>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contactos
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Duvidas
						</li>
						<li className="text-gray-800 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Fale Conosco
						</li>
					</ul>
				</div>
			</footer>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-800">
				<h1 className="text-blue-600 font-semibold">
					© 2023 DOE MT Direitos Reservado - 
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Doe MT
					</span>
				</h1>
			</div>
		</>
	);
};