package com.bootcamp.proyectointegrador.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Provincias")
public class Provincia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "El nombre de la provincia no puede estar vacío")
	private String provincia;
	
	@NotNull(message = "El pais no puede estar vacío")
	@ManyToOne(fetch = FetchType.EAGER)
	private Pais pais;

	public Provincia(Integer id, @NotBlank(message = "El nombre de la provincia no puede estar vacío") String provincia,
			@NotNull(message = "El pais no puede estar vacío") Pais pais) {
		super();
		this.id = id;
		this.provincia = provincia;
		this.pais = pais;
	}

	public Provincia() {
		super();
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public Pais getPais() {
		return pais;
	}

	public void setPais(Pais pais) {
		this.pais = pais;
	}

	public Integer getId() {
		return id;
	}
	
}
