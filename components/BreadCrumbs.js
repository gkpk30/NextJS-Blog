/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'



export default function BreadCrumbs({pages}) {
  return (
    <nav className="flex font-primary" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
              <Link href="/">
            <a  className="text-gray-400 dark:text-gray-300 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
              <Link href={page.href} >
              <a
                className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
