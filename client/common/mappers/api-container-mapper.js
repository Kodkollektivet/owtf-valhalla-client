export function mapSingle (apiEntity){
    console.log(apiEntity);
    return {
        thinking: false, //State helper value
        hasError: false, //State helper value
        valid: apiEntity.is_valid,
        running: apiEntity.is_running,
        ip: apiEntity.ip_address,
        results: apiEntity.results,
        config: apiEntity.config,
        image: {
            id: apiEntity.image,
            name: apiEntity.image_name,
            version: apiEntity.image_version,
            path: apiEntity.image_path,
            built: apiEntity.is_image_build,
        },
        container: {
            id: apiEntity.container_id,
            name: apiEntity.container_name,
            tag: apiEntity.container_tag,
            built: apiEntity.is_container_build,
        },
        endpoints: {
            build: apiEntity.build_url,
            remove: apiEntity.remove_url,
            build_image: apiEntity.build_image_url,
            remove_image: apiEntity.remove_image_url,
            build_container: apiEntity.build_container_url,
            remove_container: apiEntity.remove_container_url,
            start: apiEntity.start_url,
            stop: apiEntity.stop_url,
            execute: apiEntity.execute_url,
        },
    }
}

export function mapMany (apiEntitys){
    return apiEntitys.map(container => mapSingle(container));
}
