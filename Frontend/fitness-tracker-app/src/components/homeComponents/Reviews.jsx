import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.png';
export default function Reviews() {
	const reviews = [
		{
			title: 'Perfetto per Principianti',
			desc: 'Ho iniziato ad andare in palestra da poco e questa app è stata una scoperta fantastica. Mi permette di organizzare i miei allenamenti e seguire un piano nutrizionale senza difficoltà. La cosa che mi piace di più è la semplicità con cui posso personalizzare gli esercizi e gli obiettivi. Anche le funzioni motivazionali, come le notifiche giornaliere, mi aiutano a non perdere la motivazione. La grafica è chiara e pulita, ideale per chi, come me, non ha esperienza con il fitness tracking. Inoltre, le guide passo-passo sono estremamente utili per eseguire gli esercizi correttamente e ridurre il rischio di infortuni. Consigliata per chi vuole iniziare col piede giusto!',
			author: 'Luca Rossi',
		},
		{
			title: 'Motivazione Costante',
			desc: "Questa app ha cambiato completamente il mio modo di allenarmi. La parte che mi piace di più è l'integrazione della motivazione quotidiana: ogni giorno ricevo delle frasi motivazionali e promemoria che mi aiutano a mantenere la concentrazione sui miei obiettivi. Ho impostato dei traguardi realistici e ogni volta che ne raggiungo uno, l'app mi incoraggia a fare di meglio. In più, la possibilità di monitorare sia allenamenti che nutrizione in un unico posto la rende davvero comoda. La funzione di analisi dei progressi mi permette di capire meglio cosa funziona e cosa no, e adattare il mio piano di conseguenza. Ideale per chi vuole trasformare il fitness in uno stile di vita!",
			author: 'Sara Bianchi',
		},
		{
			title: 'Facile da Usare',
			desc: "Essendo nuovo nel mondo del fitness, ero alla ricerca di qualcosa che mi aiutasse a tenere traccia dei miei progressi senza essere troppo complicato. Questa app è perfetta per chi inizia! L'interfaccia è intuitiva e permette di registrare allenamenti e pasti in pochi click. Inoltre, offre una panoramica dettagliata dei progressi, così posso vedere facilmente come sto migliorando settimana dopo settimana. È anche possibile creare piani alimentari personalizzati in base agli obiettivi. Le notifiche di promemoria e le raccomandazioni giornaliere mi aiutano a rimanere impegnato e a non perdere di vista i miei obiettivi. Un ottimo strumento per chi è all'inizio del proprio percorso!",
			author: 'Marco Verdi',
		},
		{
			title: 'Ottima per il Monitoraggio',
			desc: "Utilizzo questa app da diversi mesi e mi ha aiutato a mantenere il controllo sia sull'allenamento che sulla nutrizione. La cosa che apprezzo di più è la precisione con cui tiene traccia di ogni dettaglio: posso monitorare il mio apporto calorico giornaliero, registrare ogni esercizio e vedere i miei progressi in modo chiaro. L'app mi permette di impostare obiettivi realistici e di adattarli man mano che miglioro. Anche la possibilità di aggiungere note personali e riflessioni agli allenamenti è un'ottima funzione. Le raccomandazioni personalizzate basate sui miei progressi mi hanno aiutato a ottimizzare il mio piano e ottenere risultati migliori. Super consigliata per chi prende il fitness seriamente.",
			author: 'Giulia Neri',
		},
		{
			title: 'Risultati Visibili',
			desc: 'Ho provato diverse app di fitness in passato, ma nessuna mi ha dato i risultati che cercavo come questa. Oltre a tenere traccia di ogni allenamento e pasto, offre anche suggerimenti personalizzati basati sui miei progressi e sui miei obiettivi. Mi piace la funzione che ti permette di confrontare i tuoi progressi con le settimane precedenti, così posso vedere esattamente quanto sto migliorando. Inoltre, le sfide mensili e i traguardi settimanali mi motivano ulteriormente a continuare. Da quando la utilizzo, ho notato un netto miglioramento nella mia forma fisica e sono più motivato che mai a continuare. Un must per chi vuole ottenere risultati concreti e misurabili.',
			author: 'Matteo Conti',
		},
	];

	const [index, setIndex] = useState(0);
	useEffect(() => {
		console.log(index);
	}, [index]);
	function changeReview(action) {
		if (action == 'next') {
			if (index > -1 && index < 5) {
				if (index === 4) {
					setIndex(0);
				} else {
					setIndex((prevIndex) => prevIndex + 1);
				}
			}
		}
		if (action == 'previous') {
			if (index > -1 && index < 5) {
				if (index == 0) {
					setIndex(4);
				} else {
					setIndex((prevIndex) => prevIndex - 1);
				}
			}
		}
	}
	return (
		<div className="reviews-section">
			<h1 className="reviews-title">Le opinioni degli utenti</h1>
			<div className="reviews">
				<img
					src={arrow}
					alt=""
					className="back-arrow arrow"
					onClick={() => {
						changeReview('previous');
					}}
				/>
				<div className="review-container">
					<h1 className="review-title">{reviews[index].title}</h1>
					<p className="review-desc">{reviews[index].desc}</p>
					<span className="review-author">{reviews[index].author}</span>
				</div>
				<img
					src={arrow}
					alt=""
					className="next-arrow arrow"
					onClick={() => {
						changeReview('next');
					}}
				/>
			</div>
			<div className="tab-indicator-container">
				{reviews.map((review, rIndex) => {
					return (
						<div
							className={`tab-indicator ${
								rIndex == index ? 'selected-tab' : ''
							}`}
						></div>
					);
				})}
			</div>
		</div>
	);
}
