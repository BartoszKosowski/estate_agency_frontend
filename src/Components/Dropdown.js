import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
    const menuItems = props.items.map((item) => <Menu.Item>
        {({ active,  }) => (
            <a
                href={"/" + item.key}
                className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
            >
                {item.value}
            </a>
        )}
    </Menu.Item>)

    return (
        <Menu as="div" className="relative inline-block text-left">
            {({open}) => (
            <Fragment>
                <Menu.Button className={"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
                    {props.name}
                </Menu.Button>

                <Transition
                    show={open}
                    enter="transform transition duration-100 ease-in"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transform transition ease-out duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo=" opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" static>
                        <div className="py-1">
                            {menuItems}
                        </div>
                    </Menu.Items>
                </Transition>
            </Fragment>
        )}
        </Menu>
    )
}