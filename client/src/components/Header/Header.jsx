import React from 'react'
import { SearchOutlined ,HomeOutlined,ShoppingCartOutlined,CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined } from '@ant-design/icons';
import { Input ,Badge } from 'antd';




export const Header = () => {
  return (
    <div className='border-b mb-6 '>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <a href="/">
                    <h2 className='text-2xl font-bold md:text-4xl'>MELS STORE</h2>
                </a>
            </div>
            <div className="header-search flex-1 flex justify-center">
            <Input size="large" placeholder="Ürün ara..." prefix={<SearchOutlined />  }
            className='rounded-full max-w-[800px]' />
   
            </div>
            <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
           
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <HomeOutlined className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Ana Sayfa</span>
              </a>
              <Badge count={5} offset={[0,6]} className='md:flex hidden'>
                
              
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <ShoppingCartOutlined  className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Sepet</span>
              </a></Badge>
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <CopyOutlined  className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Faturalar</span>
              </a>
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <UserOutlined  className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Müşteriler</span>
              </a>
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <BarChartOutlined  className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>İstatistikler</span>
              </a>
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <LogoutOutlined  className='md:text-2xl text-xl' />
              <span className='md:text-xs text-[10px]'>Çıkış</span>
              </a>
            </div>
            <Badge count={5} offset={[0,6]} className='md:hidden flex'>
              <a href={"/"} className='menu link flex flex-col hover:text-[#40a9ff] trasnsition-all'>
              <ShoppingCartOutlined  className='text-2xl' />
              <span className='md:text-xs text-[10px]'>Sepet</span>
              </a></Badge>
        </header>
    </div>
  )
}
