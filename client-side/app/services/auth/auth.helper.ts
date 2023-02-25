import Cookies from 'js-cookie'

export const saveTokenToStorage = async (accessToken: string) => {
	await Cookies.set('accessToken', accessToken)
}
export const removeTokenFromStorage = async () => {
	await Cookies.remove('accessToken')
}
