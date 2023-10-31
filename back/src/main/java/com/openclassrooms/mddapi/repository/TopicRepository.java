package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jérémy MULET on 30/10/2023.
 */
public interface TopicRepository extends JpaRepository<Topic, Integer> {

}
