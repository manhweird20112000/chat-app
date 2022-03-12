import { useAppDispatch } from 'hooks/hooks';
import _ from 'lodash';



export class Helper {


	static renderImage(idImage: string): string {
		const IMAGE_DEFAUT =
			'https://i.pinimg.com/564x/c3/08/69/c3086973f6c6601732b7dce0c822ccc5.jpg';
		return idImage === undefined || _.isNull(idImage)
			? IMAGE_DEFAUT
			: process.env.REACT_APP_API_URL + '/file/' + idImage;
	}
	static isEmptyObject(object: any): Boolean {
		return Object.keys(object).length > 0 ? true : false;
	}
}
