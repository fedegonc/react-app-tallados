import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CatalogPage from '../CatalogPage';

describe('CatalogPage', () => {
  const mockOnBack = jest.fn();

  beforeEach(() => {
    mockOnBack.mockClear();
  });

  test('renders main elements', () => {
    render(<CatalogPage onBack={mockOnBack} />);
    
    // Verificar que la imagen existe
    const image = screen.getByAltText('Imagen Central');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image.src).toContain('img1.jpg');

    // Verificar que el texto existe
    expect(screen.getByText('Imagen Central')).toBeInTheDocument();
    expect(screen.getByText('Descripción de la imagen central.')).toBeInTheDocument();

    // Verificar que el botón existe
    const backButton = screen.getByText('Volver');
    expect(backButton).toBeInTheDocument();
  });

  test('calls onBack when back button is clicked', () => {
    render(<CatalogPage onBack={mockOnBack} />);
    
    const backButton = screen.getByText('Volver');
    fireEvent.click(backButton);
    
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  test('image container has correct styles', () => {
    render(<CatalogPage onBack={mockOnBack} />);
    
    const imageContainer = screen.getByAltText('Imagen Central').parentElement;
    const styles = window.getComputedStyle(imageContainer);
    
    expect(styles.width).toBe('100%');
    expect(imageContainer).toHaveClass('image-container');
  });

  test('text container has correct styles', () => {
    render(<CatalogPage onBack={mockOnBack} />);
    
    const textContainer = screen.getByText('Imagen Central').parentElement;
    
    expect(textContainer).toHaveClass('text-container');
    expect(textContainer).toHaveStyle({
      textAlign: 'center',
      background: 'transparent'
    });
  });
});
