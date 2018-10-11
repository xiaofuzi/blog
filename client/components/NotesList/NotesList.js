import './NotesList.scss';
import Link from 'next/link';

export default (props) => (
    <div className='notes-list'>
        <ul>
            {
                props.items.map((item) => {
                    return (
                        <li className='note-item' key={item.key}>
                            <Link href={{ pathname: '/post', query: { id: item.key } }} as={`/post/${item.key}/`}>
                                <a className='note-item-title'>{item.title}</a>
                            </Link>
                            <span className='create-time'>{ item.createdAt }</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)