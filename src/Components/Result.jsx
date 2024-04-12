import { CircularProgress } from '@mui/material'
import React from 'react'
import { dataNames } from '../data/data'
import s from './styles.module.scss'

export const Result = ({ isError, isFetching, data, fileURL, fileBlob }) => {
	let maxPrediction = null
	if (data && fileBlob.type.includes('image')) {
		maxPrediction = data.predictions[0]
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
						{dataNames[maxPrediction.class]}
					</div>
				</div>
			) : null}
			{fileURL && (
				<>
					<img
						src={fileURL}
						alt='Selected'
						style={{ maxWidth: '60%', textAlign: 'center' }}
					/>
				</>
			)}
		</div>
	)
}
