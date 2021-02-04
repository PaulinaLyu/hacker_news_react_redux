import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { IconItem } from '../../common/IconItem';

const CommentsItem = ({ comment }) => {
	const date = moment.unix(comment.time);
	return (
		<Media className="mb-5 mt-3">
			<Media.Body>
				<h5 style={{fontWeight:"700"}} className="text-warning mb-3">{comment.by}</h5>
				<p className="pl-5">{comment.text}</p>
				<div className="d-flex date-time pl-5 text-black-50">
					<IconItem 
						icon={'fa fa-calendar-o'}
						text={date.format('LTS')} />
					<IconItem 
						icon={'fa fa-clock-o'}
						text={date.format('LL')}
						style={'ml-3'} />
				</div>
			</Media.Body>
		</Media>
	)
}

export default CommentsItem;