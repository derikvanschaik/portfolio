export default function Experience() {

  const companies = [
      {
          name : 'Assembly, St. Joseph Communications',
          role: 'Full Stack Developer',
          duration: 'Jan 2023 - May 2023 (4 months)',
          image: {
              'src': 'Assembly.jpeg',
              'width' : '150'
          }
      },
      {
        name : 'AlayaCare',
        role: 'Full Stack Developer',
        duration: 'May 2022 – Dec 2022 (8 months)',
        image: {
            'src': 'Alayacare.png',
            'width' : '100'
        }
    },
    {
        name : 'Ocean Networks Canada',
        role: 'Engineer in test',
        duration: 'January 2022 – May 2022 (4 months)',
        image: {
            'src': 'ONC.jpeg',
            'width' : '100'
        }
    },
      
  ]
  return (
      <div class='flex flex-col h-screen justify-center items-center'>
          {
              companies.map( ({name, duration, role, image }) =>{
                  return(
                    <div class='px-5 py-5 w-1/2'>
                    <h1 class='font-bold text-2xl'>{name}</h1>
                    <hr class='bg-gray-700 h-2' />
                        <div class='flex flex-row items-center mt-5'>
                                <img src={image.src} width={image.width} class='border-2 border-black rounded'></img>
                                <div class='ml-5'>
                                    <h3 class='text-lg'>{role}</h3>
                                    <p class='text-gray-500 italic'>{duration}</p>
                                </div>
                        </div>
                    </div>

                  )
              })
          }
      </div>
  );
}
