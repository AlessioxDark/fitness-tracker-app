import React from 'react';
import icon1 from '../assets/icons/apple.png';
import icon2 from '../assets/icons/exercise.png';
import icon3 from '../assets/icons/goal.png';
export default function Features() {
	return (
		<div className="feature-section">
			<h1 className="feature-title">Le nostre funzionalità</h1>
			<div className="features">
				<div className="feature1">
					<div className="feature-icon-container">
						<img src={icon1} alt="" className="feature-icon" />
					</div>
					<h1 className="feature-title">Piano Nutrizionale </h1>
					<div className="feature-desc-container">
						<p className="feature-desc">
							Gestisci facilmente la tua dieta con un piano alimentare su misura
							per te. Imposta i tuoi obiettivi calorici e nutrizionali e traccia
							ciò che mangi quotidianamente. Raggiungi il tuo peso ideale
							mantenendo l&ap;equilibrio tra cibo e fitness.
						</p>
					</div>
				</div>
				<div className="feature2">
					<div className="feature-icon-container">
						<img src={icon2} alt="" className="feature-icon" />
					</div>
					<h1 className="feature-title"> Traccia gli Allenamenti</h1>
					<div className="feature-desc-container">
						<p className="feature-desc">
							{' '}
							Traccia ogni tuo allenamento con precisione. Registra le serie, le
							ripetizioni e i pesi utilizzati per ogni esercizio e visualizza i
							tuoi progressi nel tempo. Personalizza i tuoi programmi di
							allenamento per adattarli ai tuoi obiettivi.
						</p>
					</div>
				</div>
				<div className="feature3">
					<div className="feature-icon-container">
						<img src={icon3} alt="" className="feature-icon" />
					</div>
					<h1 className="feature-title">Obiettivi chiari</h1>
					<div className="feature-desc-container">
						<p className="feature-desc">
							Imposta obiettivi realistici e ricevi promemoria per tenerti
							motivato. Che sia un allenamento o un nuovo obiettivo alimentare,
							ti aiuteremo a restare concentrato, tracciando i tuoi successi per
							alimentare la tua motivazione.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
