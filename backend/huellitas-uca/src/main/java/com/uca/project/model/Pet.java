package com.uca.project.model;

import com.uca.project.modelDTO.PetImagesDTO;
import io.swagger.v3.core.util.Json;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Setter
@Getter
@Table(name = "pet")
//@TypeDef(
//        name = "jsonb",
//        typeClass = PetImagesDTO.class
//)
@ToString
public class Pet implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "pet_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer  petId;

    @Column(name="SEX")
    String petSex;

    @Column(name="PET_NAME")
    String petName;

    @Column(name="COLOR")
    String petColor;

    @Column(name="VETERINARY_CARE")
    boolean veterynaryCare;

    public boolean getVeterynaryCare() {
        return veterynaryCare;
    }

    @Column(name="BREED")
    String petBreed;

    @Column(name="VACCINATION")
    boolean vaccinePet;
    public boolean getVaccinePet() {
        return vaccinePet;
    }

//    @Type(type = "jsonb")
//    @Column(name="PET_IMAGES", columnDefinition = "jsonb")
    @Column(name="PET_IMAGES")
    String petImages;

    @Column(name="SPECIES")
    String species;

    @Column(name="AGE")
    Integer petAge;


    @Column(name="SIZE")
    String size;

    @Column(name="PETDESCRIPTION")
    String petDescript;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private Owner owner;




}
