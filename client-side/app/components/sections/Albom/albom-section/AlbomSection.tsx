import { FC } from 'react'

import { albom } from './albom-section.data'
import AboutSectionItem from './section-item/SectionItem'

const AlbomSection: FC = () => {
	return (
		<>
			{albom.map(item => (
				<AboutSectionItem key={item.id} item={item} />
			))}
		</>
	)
}

export default AlbomSection
