import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: <AiOutlineMail className='h-8 w-8' />,
    name: 'Email',
    value: 'dankralski@gmail.com',
    href: 'mailto:dankralski@gmail.com',
  },
  {
    icon: <AiFillGithub className='h-8 w-8' />,
    name: 'GitHub',
    value: 'github.com/DankoKr',
    href: 'https://github.com/DankoKr',
  },
  {
    icon: <AiFillLinkedin className='h-8 w-8' />,
    name: 'LinkedIn',
    value: 'linkedin.com/in/danko-kralski',
    href: 'https://www.linkedin.com/in/danko-kralski-40a56228b/',
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    >
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.name}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: index * 0.2 },
            },
          }}
          className='rounded-2xl bg-gray-900/60 backdrop-blur-sm p-8 flex flex-col items-center text-center shadow-lg'
        >
          <div className='rounded-full bg-[#1a3a4a] p-4 mb-6'>
            {method.icon}
          </div>
          <h2 className='text-lg font-medium mb-4'>{method.name}</h2>
          <p className='text-sm text-gray-300 mb-6'>{method.value}</p>
          <a
            href={method.href}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full bg-[#1a3a4a] hover:bg-[#254b5e] text-white py-2 rounded-md text-sm text-center transition-colors'
          >
            Connect
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
