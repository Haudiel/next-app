'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  Image,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  chakra,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiBell,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import axios from 'axios'
import { useState, useEffect, useMemo, useCallback } from 'react'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { generateFolio } from '@/utils/folio'
import MaterialReactTable, { MRT_ColumnDef, MRT_Row } from 'material-react-table'
import { Tooltip, ThemeProvider, createTheme, IconButton as MuiButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpend: () => void,
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface EmployeeData {
  employeeID: string;
  name: string;
  supervisor: string;
  descr: string;
  photo: string;
  status: string;
}

interface ValueData {
  nombreSolicitante: string;
  departamento: string;
  critico: string;
  noParteFabricante: string;
  marca: string;
  descripcion: string;
  frecuenciaCambio: number;
  cantidad: number;
  fechaSolicitud: string;
  fechaVencimiento: string;
  lineaEstacion: string;
  justificacionAlta: string;
  folioPedido: string;
  compradorAsignado: string;
  tipoProyecto: string;
  documentoPDF: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/cardSelect' },
  { name: 'Solicitud', icon: FiTrendingUp, href: '/cardSelect' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Magna_logo.svg/2560px-Magna_logo.svg.png' />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'red.500',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpend, ...rest }: MobileProps) => {
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null);
  const noEmpelado = localStorage.getItem('noEmpleado')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const [valueData, setValueData] = useState<any>({})
  const [valueDataArray, setValueDataArray] = useState<ValueData[]>([]);
  const [responseMessage, setResponseMessage] = useState('');

  const {
    folioPedido,
    numComprador,
    compradorAsignado,
    nombreSolicitante,
    fechaSolicitud,
    fechaVencimiento,
    critico,
    noParteFabricante,
    marca,
    descripcion,
    frecuenciaCambio,
    cantidad,
    tipoProyecto,
    lineaEstacion,
    justificacionAlta
  } = valueData;

  async function sendData() {
    try {
      const response = await axios.post('https://localhost:7063/AdminUser/InsertData', valueData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage('Error al enviar los datos');
    }
  }
  
  const handleDeleteRow = useCallback(
    (row: MRT_Row<ValueData>) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('noParteFabricante')}`)
      ) {
        return;
      }
      valueDataArray.splice(row.index, 1);
      setValueDataArray([...valueDataArray]);
    },
    [valueDataArray],
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7063/AdminUser/GetData?emplid=${noEmpelado}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  const folio = generateFolio();

  const columns = useMemo<MRT_ColumnDef<ValueData>[]>(
    () => [
      {
        accessorKey: 'critico', //access nested data with dot notation
        header: 'Critico',
        size: 100,
      },
      {
        accessorKey: 'noParteFabricante',
        header: 'No. Parte',
        size: 200,
      },
      {
        accessorKey: 'marca', //normal accessorKey
        header: 'Marca',
        size: 150,
      },
    ],
    [],
  );
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpend}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        //*Agregar MODAL
        <Button mt={3} ref={btnRef} onClick={onOpen}>
          Crear Solicitud
        </Button>

        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={'inside'}
          size={'xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crear solicitud</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  folioPedido: `${folio}`,
                  numComprador: `${employeeData?.employeeID}`,
                  nombreSolicitante: `${employeeData?.name}`,
                  departamento: `${employeeData?.descr}`,
                  fechaSolicitud: '',
                  fechaVencimiento: '',
                  critico: '',
                  noParteFabricante: '',
                  marca: '',
                  descripcion: '',
                  frecuenciaCambio: 0,
                  cantidad: 0,
                  compradorAsignado: '',
                  tipoProyecto: '',
                  lineaEstacion: '',
                  justificacionAlta: '',
                  documentoPDF: '',
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    console.log(JSON.stringify(values, null, 2))
                    console.log(values)

                    const newValueData: ValueData = {
                      ...values,
                    };

                    setValueDataArray((prevArray) => [...prevArray, newValueData]);
                    setValueData(values)
                
                    sendData();

                    actions.setSubmitting(false)
                  }, 1000)
                }}
              >
                {(props) => (
                  <Form>
                    <Field name='folioPedido'>
                      {({ field, form }: any) => (
                        <FormControl isDisabled>
                          <FormLabel>Folio</FormLabel>
                          <Input {...field} placeholder='name' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='nombreSolicitante'>
                      {({ field, form }: any) => (
                        <FormControl isDisabled>
                          <FormLabel>Nombre del solicitante</FormLabel>
                          <Input {...field} placeholder='name' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='numComprador'>
                      {({ field, form }: any) => (
                        <FormControl isDisabled>
                          <FormLabel>numComprador</FormLabel>
                          <Input {...field} placeholder='name' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='departamento'>
                      {({ field, form }: any) => (
                        <FormControl isDisabled>
                          <FormLabel>Departamento</FormLabel>
                          <Input {...field} placeholder='name' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='fechaSolicitud'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Fecha de la Solicitud</FormLabel>
                          <Input
                            {...field}
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='fechaVencimiento'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Fecha de vencimiento</FormLabel>
                          <Input
                            {...field}
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='compradorAsignado'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Comprador a asignar</FormLabel>
                          <Select {...field} placeholder='Seleccionar'>
                            <option>Comprador uno</option>
                            <option>Comprador dos</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='tipoProyecto'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Tipo de proyecto</FormLabel>
                          <Input {...field} placeholder='Tipo de proyecto' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='critico'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Critico</FormLabel>
                          <Select {...field} placeholder='Seleccionar'>
                            <option value='SI'>Si</option>
                            <option value='NO'>No</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='noParteFabricante'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Número de parte del fabricante</FormLabel>
                          <Input {...field} placeholder='No. Parte' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='marca'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Marca</FormLabel>
                          <Input {...field} placeholder='Marca' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='descripcion'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Descripción</FormLabel>
                          <Input {...field} placeholder='Descripción' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='frecuenciaCambio'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Frecuencia de cambio (Dias)</FormLabel>
                          <NumberInput {...field} min={0}
                            id='frecuenciaCambio'
                            name='frecuenciaCambio'
                            type={"number"}
                            onChange={v => {
                              props.setFieldValue('frecuenciaCambio', v);
                            }}
                            onBlur={props.handleBlur}
                            defaultValue={props.initialValues['frecuenciaCambio']}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='cantidad'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Cantidad instalada</FormLabel>
                          <NumberInput {...field} min={0}
                            id='cantidad'
                            name='cantidad'
                            type={"number"}
                            onChange={v => {
                              props.setFieldValue('cantidad', v);
                            }}
                            onBlur={props.handleBlur}
                            defaultValue={props.initialValues['cantidad']}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='lineaEstacion'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Linea o estación donde se utiliza el material</FormLabel>
                          <Input {...field} placeholder='Linea o estación' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='justificacionAlta'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Justificación de la alta</FormLabel>
                          <Input {...field} placeholder='Justificación' />
                        </FormControl>
                      )}
                    </Field>
                    <Field name='documentoPDF'>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Agregar documento PDF</FormLabel>
                          <Input
                            {...field}
                            multiple
                            size="md"
                            type="file"

                          />
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme='teal'
                      isLoading={props.isSubmitting}
                      type='submit'
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <chakra.div
                pt={3}
              >
                <ThemeProvider theme={createTheme({})}>
                  <MaterialReactTable
                    columns={columns}
                    data={valueDataArray}
                    enableColumnActions={false}
                    enableTopToolbar={false}
                    enableBottomToolbar={false}
                    enableRowActions
                    renderRowActions={({ row, table }) => (
                      <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="right" title="Delete">
                          <IconButton color="error" onClick={() => handleDeleteRow(row)} aria-label={''}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  />
                </ThemeProvider>
              </chakra.div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => {
                onClose()
                setValueDataArray([]);
              }}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    employeeData?.photo
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{employeeData?.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {employeeData?.descr}
                  </Text>
                </VStack>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpend={onOpen} />
        //*Agregar info aqui
      <Box ml={{ base: 0, md: 60 }} p="4">

      </Box>
    </Box>
  )
}

export default SidebarWithHeader
