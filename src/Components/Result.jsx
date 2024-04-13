import { CircularProgress } from '@mui/material'
import React from 'react'
import { classDesc, dataNames } from '../data/data'
import s from './styles.module.scss'
import { appendToArray, getRandomInt } from '../utils/helpers'

export const Result = ({ isError, isFetching, data, fileURL, fileBlob }) => {
	let maxPrediction = null
	if (data && fileBlob.type.includes('image')) {
		maxPrediction = data[0].result.predictions[0]
	}

	return (
		<div
			style={{
				marginTop: 20,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{isError ? (
				<div>Ошибка</div>
			) : isFetching ? (
				<CircularProgress />
			) : data ? (
				<div>
					<div className={s.title}>Ответ сервера:</div>
					<div className={s.result}>
						<>С точностью </>
						{(maxPrediction.confidence * 100).toFixed(2)}% это -{' '}
						<br />
						<div>{dataNames[maxPrediction.class]}</div>
					</div>

					{fileURL && (
						<div className={s.result__info}>
							<img
								src={`http://127.0.0.1:8000/new_${fileBlob.name.replace(
									' ',
									'_'
								)}`}
								alt='Selected'
								style={{ maxWidth: '60%', textAlign: 'center' }}
							/>

							<div className={s.result__info__right}>
								<div className={s.result__info__right__title}>
									Описание:
								</div>

								<p className={s.result__info__right__text}>
									{classDesc[maxPrediction.class][getRandomInt(0, 3)]}
								</p>

								<a
									href='#similar'
									className={s.result__similar}
								>
									Посмотреть похожие
								</a>
							</div>
						</div>
					)}

					<div className={s.title} id='similar'>
						Похожие:{' '}
					</div>

					<div className={s.result__flex}>
						{appendToArray().map((elem, key) => (
							<a
								href={`http://127.0.0.1:8000/${maxPrediction.class}/${elem}.jpg`}
								key={key}
								target='blank'
							>
								<div>Открыть</div>
								<img
									src={`http://127.0.0.1:8000/${maxPrediction.class}/${elem}.jpg`}
									className={s.result__flex__img}
								/>
							</a>
						))}
					</div>
				</div>
			) : null}
		</div>
	)
}
