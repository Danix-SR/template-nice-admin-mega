import { SideBarManu } from './SideModel';

export const SideBarMenuArray: SideBarManu[] = [
  {
    id: 1,
    title: 'Proveedor',
    icon: 'bi bi-journal-text',
    items: [
      { id: 1, title: 'Crear Proveedor', icon: 'bi bi-person-plus-fill' },
      { id: 2, title: 'Eliminar Proveedor', icon: 'bi bi-person-x-fill' }
    ]
  },
  {
    id: 2,
    title: 'Evaluacion',
    icon: 'bi bi-clipboard2-check',
    items: [
      { id: 1, title: 'Calificar', icon: 'bi bi-card-checklist' },
      { id: 2, title: 'Valorazion', icon: 'bi bi-clipboard-data' }
    ]
  },
  {
    id: 3,
    title: 'Reportes',
    icon: 'bi bi-file-earmark-text',
    items: [
      { id: 1, title: 'Basico', icon: 'bi bi-file-earmark-bar-graph' },
      { id: 2, title: 'General', icon: 'bi bi-file-earmark-bar-graph' },
      { id: 2, title: 'Estadisticas', icon: 'bi bi-file-earmark-bar-graph' }
    ]
  },
  {
    id: 4,
    title: 'Administracion',
    icon: 'bi bi-file-earmark-text',
    items: [{ id: 1, title: 'Usuarios', icon: 'bi bi-person-video2' }]
  }
];
