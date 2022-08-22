import React from 'react'
import { types, Text } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
    return (
        <div className='p-6 text-center'>
            <Text
            propName="title"
            renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1> }
            placeholder="Type a title..."
            />
        </div>
    )
}

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    getDefaultProps: () => ({
        title: 'Hello, world!'
    }),
    sideEditProps: [],
}

export default Thumbnail
