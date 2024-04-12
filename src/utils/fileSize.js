export const formatFileSize = (sizeInBytes) => {
	if (sizeInBytes === 0) return '0 Bytes'

	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	const index = Math.floor(Math.log(sizeInBytes) / Math.log(1024))
	const size = parseFloat((sizeInBytes / Math.pow(1024, index)).toFixed(2))

	return `${size} ${units[index]}`
}
